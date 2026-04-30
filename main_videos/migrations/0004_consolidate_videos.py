"""
Migration: Consolidate news_video, blogs_video, sports_video → Video.

- Creates the new main_videos_video table
- Migrates all existing rows with appropriate category tags
- Drops the old tables
"""

from django.db import migrations, models


def migrate_videos_forward(apps, schema_editor):
    """Copy rows from legacy tables → Video."""
    Video = apps.get_model("main_videos", "Video")
    db_alias = schema_editor.connection.alias

    mappings = [
        ("news_video", "news"),
        ("blogs_video", "blogs"),
        ("sports_video", "sports"),
    ]

    for model_name, category in mappings:
        try:
            OldModel = apps.get_model("main_videos", model_name)
            for row in OldModel.objects.using(db_alias).all():
                Video.objects.using(db_alias).create(
                    category=category,
                    video_title=row.video_title,
                    video_lng=row.video_lng,
                    video_author=row.video_author,
                    video_pdate=row.video_pdate,
                    video_desc=row.video_desc,
                    video_img_preview=row.video_img_preview,
                    video_img_show=row.video_img_show,
                    video_file=row.video_file,
                )
        except LookupError:
            pass


def migrate_videos_reverse(apps, schema_editor):
    Video = apps.get_model("main_videos", "Video")
    Video.objects.using(schema_editor.connection.alias).all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ("main_videos", "0003_blogs_video_sports_video_alter_news_video_video_desc"),
    ]

    operations = [
        # 1. Create new consolidated Video table
        migrations.CreateModel(
            name="Video",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("category", models.CharField(
                    choices=[("news", "News"), ("blogs", "Blogs"), ("sports", "Sports")],
                    db_index=True,
                    default="news",
                    max_length=10,
                )),
                ("video_title", models.CharField(blank=True, max_length=100, null=True)),
                ("video_lng", models.CharField(blank=True, max_length=30, null=True)),
                ("video_author", models.CharField(blank=True, max_length=100, null=True)),
                ("video_pdate", models.IntegerField(blank=True, null=True)),
                ("video_desc", models.CharField(blank=True, max_length=250, null=True)),
                ("video_img_preview", models.ImageField(blank=True, null=True, upload_to="video_previews/")),
                ("video_img_show", models.ImageField(blank=True, null=True, upload_to="video_previews/")),
                ("video_file", models.FileField(blank=True, null=True, upload_to="videos/")),
            ],
            options={
                "verbose_name": "Video",
                "verbose_name_plural": "Videos",
                "ordering": ["-id"],
            },
        ),

        # 2. Copy data
        migrations.RunPython(migrate_videos_forward, migrate_videos_reverse),

        # 3. Drop legacy tables
        migrations.DeleteModel(name="news_video"),
        migrations.DeleteModel(name="blogs_video"),
        migrations.DeleteModel(name="sports_video"),
    ]
