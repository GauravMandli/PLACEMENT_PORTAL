from django.db import models
from students.models import StudentProfile
from jobs.models import JobRequirement
# Create your models here.


class JobApplication(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    job = models.ForeignKey(JobRequirement, on_delete=models.CASCADE)
    applied_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=(
            ('applied','Applied'),
            ('shortlisted','Shortlisted'),
            ('rejected','Rejected'),
            ('selected','Selected')
        ),
        default='applied'
    )

    def __str__(self):
        return f"{self.student} - {self.job}"
        
class ShortlistedStudent(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    job = models.ForeignKey(JobRequirement, on_delete=models.CASCADE)
    interview_date = models.DateField()
    interview_time = models.TimeField()
    mode = models.CharField(
        max_length=20,
        choices=(('online','Online'),('offline','Offline'))
    )
    status = models.CharField(
        max_length=20,
        choices=(('shortlisted','Shortlisted'),('hold','Hold'),('rejected','Rejected')),
        default='shortlisted'
    )


