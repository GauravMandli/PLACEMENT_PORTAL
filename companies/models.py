from django.conf import settings
from django.db import models

# Create your models here.

class CompanyProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    company_name = models.CharField(max_length=200)
    company_email = models.EmailField()
    phone = models.CharField(max_length=15)
    gst_number = models.CharField(max_length=20, null=True, blank=True)
    industry = models.CharField(max_length=100)
    company_size = models.CharField(max_length=50)
    website = models.URLField()
    address = models.TextField()
    description = models.TextField()  #new


    cp_name = models.CharField(max_length=150)
    cp_email = models.EmailField(null=True, blank=True)
    cp_phone = models.CharField(max_length=15)
    
    designation = models.CharField(max_length=150)

    reg_certificate = models.FileField(upload_to='copmpany_certificates/')

    is_approved = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name
    