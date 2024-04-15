from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator

class Story(models.Model):
  id = models.AutoField(primary_key=True)
  title = models.CharField(max_length=255)
  author = models.CharField(max_length=255)
  rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
  date = models.DateTimeField(default=timezone.now)
  url = models.URLField()

  def __str__(self):
    return f'{self.title} by {self.author}'
  
class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    story_id = models.ForeignKey(Story, on_delete=models.CASCADE)
    parent_comment_id = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    author = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.author} on [{self.story_id}]: {self.text} '
    