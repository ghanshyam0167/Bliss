"""
Migration: Rename Userdetails → UserDetails, Profileimage → profile_image.

Uses RenameModel + RenameField so existing data is fully preserved.
"""

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0014_stories"),
    ]

    operations = [
        # Rename the model (also renames the DB table)
        migrations.RenameModel(
            old_name="Userdetails",
            new_name="UserDetails",
        ),
        # Rename the field (also renames the DB column)
        migrations.RenameField(
            model_name="UserDetails",
            old_name="Profileimage",
            new_name="profile_image",
        ),
    ]
