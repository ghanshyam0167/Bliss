"""
Migration 0015: Rename Userdetails → UserDetails, Profileimage → profile_image

Uses SeparateDatabaseAndState to work around a Django 5.1 bug where RenameModel
trips on old/new names that lowercase to the same string ('userdetails').

- State ops: DeleteModel old + CreateModel new (bypasses the buggy RenameModel)
- DB ops:    RunSQL to rename only the column (table name is unchanged —
             both Userdetails and UserDetails map to user_userdetails)
"""

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0014_stories"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            # ── State only ────────────────────────────────────────────────
            # Remove old model name, register the new one — no DB changes.
            state_operations=[
                migrations.DeleteModel(name="Userdetails"),
                migrations.CreateModel(
                    name="UserDetails",
                    fields=[
                        ("id", models.BigAutoField(
                            auto_created=True,
                            primary_key=True,
                            serialize=False,
                            verbose_name="ID",
                        )),
                        ("user", models.ForeignKey(
                            on_delete=django.db.models.deletion.CASCADE,
                            to=settings.AUTH_USER_MODEL,
                        )),
                        ("profile_image", models.FileField(
                            blank=True,
                            max_length=500,
                            null=True,
                            upload_to="profiles/",
                        )),
                        ("created_at", models.DateTimeField(auto_now_add=True)),
                    ],
                ),
            ],
            # ── Database only ─────────────────────────────────────────────
            # Rename the column; table name is identical for both model names.
            database_operations=[
                migrations.RunSQL(
                    sql='ALTER TABLE "user_userdetails" RENAME COLUMN "Profileimage" TO "profile_image";',
                    reverse_sql='ALTER TABLE "user_userdetails" RENAME COLUMN "profile_image" TO "Profileimage";',
                ),
            ],
        ),
    ]
