"""bliss/forms.py — Application-wide form definitions"""

from django import forms


class LoginForm(forms.Form):
    UserName = forms.EmailField(
        label="",
        widget=forms.EmailInput(attrs={
            "placeholder": "Enter email address",
            "id": "username",
            "class": "inputs",
            "autocomplete": "off",
        }),
    )
    PassWord = forms.CharField(
        label="",
        max_length=128,
        widget=forms.PasswordInput(attrs={
            "placeholder": "Enter Password",
            "id": "password",
            "class": "inputs",
            "autocomplete": "off",
        }),
    )


class RegisterForm(forms.Form):
    FullName = forms.CharField(
        label="",
        max_length=150,
        widget=forms.TextInput(attrs={
            "placeholder": "Enter full name",
            "id": "fullname",
            "class": "inputs",
            "autocomplete": "off",
        }),
    )
    UserName = forms.EmailField(
        label="",
        widget=forms.EmailInput(attrs={
            "placeholder": "Enter email address",
            "id": "username",
            "class": "inputs",
            "autocomplete": "off",
        }),
    )
    PassWord1 = forms.CharField(
        label="",
        min_length=8,
        max_length=128,
        widget=forms.PasswordInput(attrs={
            "placeholder": "Enter Password (min 8 characters)",
            "id": "password1",
            "class": "inputs password",
            "autocomplete": "off",
        }),
    )
    PassWord2 = forms.CharField(
        label="",
        max_length=128,
        widget=forms.PasswordInput(attrs={
            "placeholder": "Confirm Password",
            "id": "password2",
            "class": "inputs password",
            "autocomplete": "off",
        }),
    )

    def clean(self):
        cleaned_data = super().clean()
        pw1 = cleaned_data.get("PassWord1")
        pw2 = cleaned_data.get("PassWord2")
        if pw1 and pw2 and pw1 != pw2:
            raise forms.ValidationError("Passwords do not match.")
        return cleaned_data


class Uploadinput(forms.Form):
    Textinput = forms.CharField(
        label="",
        required=False,
        widget=forms.Textarea(attrs={
            "placeholder": "What's on your mind?",
            "id": "post-text-area",
            "oninput": "autoExpand(this)",
            "cols": "",
            "rows": "",
        }),
    )
    imgVidfield = forms.FileField(
        label="",
        required=False,
        widget=forms.FileInput(attrs={
            "id": "upload",
            "accept": "image/*,video/*",
            "onchange": "handleFileSelect00(this)",
        }),
    )