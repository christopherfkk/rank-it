from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def index(request):
    if request.method == 'GET':
        return JsonResponse({'message': 'hello world'})
    else:
        print(f"Receive POST request: {json.loads(request.body)}")
        return JsonResponse({'message': 'successful POST'})
