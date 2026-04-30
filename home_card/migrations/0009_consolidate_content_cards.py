"""
Migration: Consolidate 16 separate card models into ContentCard.

- Creates the new home_card_contentcard table
- Migrates all existing rows from home_card_1..6, book_card_1..5,
  sport_card_1..5 into ContentCard with appropriate category tags
- Drops the old tables
"""

from django.db import migrations, models


def migrate_cards_forward(apps, schema_editor):
    """Copy rows from legacy tables → ContentCard."""
    ContentCard = apps.get_model("home_card", "ContentCard")
    db_alias = schema_editor.connection.alias

    # (legacy table model name, category slug, slot 1-N)
    mappings = [
        ("home_card_1", "blog"),
        ("home_card_2", "blog"),
        ("home_card_3", "blog"),
        ("home_card_4", "blog"),
        ("home_card_5", "blog"),
        ("home_card_6", "blog"),
        ("book_card_1", "book"),
        ("book_card_2", "book"),
        ("book_card_3", "book"),
        ("book_card_4", "book"),
        ("book_card_5", "book"),
        ("sport_card_1", "sport"),
        ("sport_card_2", "sport"),
        ("sport_card_3", "sport"),
        ("sport_card_4", "sport"),
        ("sport_card_5", "sport"),
    ]

    for model_name, category in mappings:
        try:
            OldModel = apps.get_model("home_card", model_name)
            for row in OldModel.objects.using(db_alias).all():
                ContentCard.objects.using(db_alias).create(
                    category=category,
                    card_desc=row.card_desc,
                    card_image=row.card_image,
                )
        except LookupError:
            pass  # Model may not exist in historical state


def migrate_cards_reverse(apps, schema_editor):
    """Truncate ContentCard (reverse migration; old tables already recreated by Django)."""
    ContentCard = apps.get_model("home_card", "ContentCard")
    ContentCard.objects.using(schema_editor.connection.alias).all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ("home_card", "0008_sport_card_1_sport_card_2_sport_card_3_sport_card_4_and_more"),
    ]

    operations = [
        # 1. Create new consolidated table
        migrations.CreateModel(
            name="ContentCard",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("category", models.CharField(
                    choices=[("blog", "Blog"), ("book", "Book / News"), ("sport", "Sport")],
                    db_index=True,
                    default="blog",
                    max_length=10,
                )),
                ("card_desc", models.CharField(blank=True, max_length=250, null=True)),
                ("card_image", models.ImageField(blank=True, max_length=250, null=True, upload_to="homecard/")),
            ],
            options={
                "verbose_name": "Content Card",
                "verbose_name_plural": "Content Cards",
                "ordering": ["id"],
            },
        ),

        # 2. Copy data from old tables → new table
        migrations.RunPython(migrate_cards_forward, migrate_cards_reverse),

        # 3. Drop legacy tables
        migrations.DeleteModel(name="home_card_1"),
        migrations.DeleteModel(name="home_card_2"),
        migrations.DeleteModel(name="home_card_3"),
        migrations.DeleteModel(name="home_card_4"),
        migrations.DeleteModel(name="home_card_5"),
        migrations.DeleteModel(name="home_card_6"),
        migrations.DeleteModel(name="book_card_1"),
        migrations.DeleteModel(name="book_card_2"),
        migrations.DeleteModel(name="book_card_3"),
        migrations.DeleteModel(name="book_card_4"),
        migrations.DeleteModel(name="book_card_5"),
        migrations.DeleteModel(name="sport_card_1"),
        migrations.DeleteModel(name="sport_card_2"),
        migrations.DeleteModel(name="sport_card_3"),
        migrations.DeleteModel(name="sport_card_4"),
        migrations.DeleteModel(name="sport_card_5"),
    ]
