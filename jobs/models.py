from django.db import models
from companies.models import CompanyProfile
# Create your models here.


class JobRequirement(models.Model):
    company = models.ForeignKey(CompanyProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    eligibility = models.CharField(max_length=200)
    last_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices=(('active','Active'), ('closed','Closed')),
        default='active'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
