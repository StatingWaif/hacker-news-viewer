# Инструкция

1. Создайте виртуальное окружение с помощью команды:

   ```bash
   python -m venv .venv
   ```

2. Активируйте виртуальное окружение:

   ```bash
   source .venv/bin/activate  # Для macOS и Linux
   . .venv/Scripts/activate  # Для Windows
   ```

3. Установите зависимости, включая Django, Django REST Framework и django-cors-headers:

   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. Запустите сервер:

   ```bash
   python manage.py runserver
   ```

Теперь вы можете открыть браузер и перейти по адресу `http://127.0.0.1:8000/admin/`, чтобы войти в Django Admin Panel.

## Учетные данные для входа

- **Имя пользователя (Username):** admin
- **Пароль (Password):** 123

После успешного входа вы сможете управлять вашим приложением с помощью Django Admin Panel.

Примечание: Перед началом работы с клиентом, не забудьте выполнить `yarn` для установки всех зависимостей JavaScript, а затем запустить проект с помощью `yarn start`.
