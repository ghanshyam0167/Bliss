# forms.py
from django import forms

class LoginForm(forms.Form):
    UserName = forms.CharField(label="" ,max_length=50,widget=forms.TextInput(attrs={'placeholder': 'Enter email address',"id" : "username", 'class': 'inputs','autocomplete':'off', }))
    PassWord = forms.CharField(label="" ,max_length=20,widget=forms.PasswordInput(attrs={'placeholder': 'Enter Password' ,"id" : "password", 'class': 'inputs', 'autocomplete':'off',}))
    # Add more fields as needed
class RegisterForm(forms.Form):
    FullName = forms.CharField(label="" ,max_length=50,widget=forms.TextInput(attrs={'placeholder': 'Enter full name',"id" : "fullname", 'class': 'inputs','autocomplete':'off', }))
    UserName = forms.CharField(label="" ,max_length=50,widget=forms.TextInput(attrs={'placeholder': 'Enter email address',"id" : "username", 'class': 'inputs','autocomplete':'off', }))
    PassWord1 = forms.CharField(label="" ,max_length=20,widget=forms.PasswordInput(attrs={'placeholder': 'Enter Password' ,"id" : "password1", 'class': 'inputs password', 'autocomplete':'off',}))
    PassWord2 = forms.CharField(label="" ,max_length=20,widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password' ,"id" : "password2", 'class': 'inputs password', 'autocomplete':'off',}))

class Uploadinput(forms.Form):
    Textinput = forms.CharField(label="",required=False, widget=forms.Textarea(attrs={'placeholder': "What's on your mind?", "id" : "post-text-area", "oninput": "autoExpand(this)", "cols": "","rows" : "",}))
    imgVidfield = forms.FileField(label="", required=False, widget=forms.FileInput(attrs={"id": "upload","accept": "image/*,video/*", "onchange": "handleFileSelect00(this)",}))
 