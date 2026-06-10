const uk = {
  nav: {
    join: "Приєднатися",
    login: "Вхід",
  },
  login: {
    panel: {
      subtitle: "Вхід для співробітників",
      title: "Увійдіть до робочого простору школи",
      description:
        "Для власників, адміністраторів і викладачів. Увійдіть, щоб керувати учнями, уроками, оплатами та комунікацією.",
      features: [
        "Єдина система для управління абонементами, оплатами, розкладом",
        "Особисті кабінети у всіх співробітників",
        "Особисті кабінети клієнтів",
        "Залучення/утримання клієнтів",
        "Детальна статистика",
        "Звіти та аналітика",
        "Онлайн запис на уроки",
      ],
      chips: [
        { number: "ПІДТРИМКА/НАЛАШТУВАННЯ", label: "СУПРОВІД", numberFontSize: 12 },
        { number: "ERP/CRM", label: "керування" },
        { number: "UA/ENG", label: "інтерфейс" },
      ],
    },
    form: {
      title: "Вхід для співробітників",
      subtitle: "Увійдіть як власник, адміністратор або викладач.",
      googleButton: "Увійти через Google",
      divider: "або",
      email: { label: "E-mail", placeholder: "example@gmail.com" },
      password: { label: "Пароль", placeholder: "********" },
      forgotPassword: "Забули пароль?",
      submit: "Вхід",
      noAccess: "Немає доступу?",
      joinLink: "Приєднатися",
    },
  },
  register: {
    panel: {
      subtitle: "Ласкаво просимо до Voopty",
      title: "Реєстрація нового акаунту",
      description:
        "Створіть акаунт для вашого закладу або команди та отримайте доступ до всіх можливостей платформи.",
      features: [
        "Єдина система для управління абонементами, оплатами, розкладом",
        "Особисті кабінети у всіх співробітників",
        "Особисті кабінети клієнтів",
        "Залучення/утримання клієнтів",
        "Детальна статистика",
        "Звіти та аналітика",
        "Онлайн запис на уроки",
      ],
      chips: [
        { number: "ПІДТРИМКА/НАЛАШТУВАННЯ", label: "СУПРОВІД", numberFontSize: 12 },
        { number: "ERP/CRM", label: "керування" },
        { number: "UA/ENG", label: "інтерфейс" },
      ],
    },
    form: {
      title: "Приєднатись",
      subtitle: "Створіть акаунт для вашого закладу або команди.",
      schoolName: {
        label: "Назва закладу або ваше ім'я",
        placeholder: "Введіть назву закладу або ваше ім'я",
      },
      email: { label: "Email", placeholder: "name@voopty.com" },
      phone: { label: "Телефон", placeholder: "+380 (__) ___-__-__" },
      password: { label: "Пароль", placeholder: "Створіть пароль" },
      acceptTerms: "Я приймаю",
      termsLink: "умови угоди",
      notRobot: "Я не робот",
      sourceQuestion: "Як ви дізнались про Voopty?",
      sourceOptions: [
        { value: "google", label: "Google" },
        { value: "facebook", label: "Facebook" },
        { value: "instagram", label: "Instagram" },
        { value: "recommendation", label: "Рекомендація" },
        { value: "other", label: "Інше" },
      ],
      sourceOther: {
        label: "Вкажіть, будь ласка",
        placeholder: "Напишіть, як дізналися про нас",
      },
      alert:
        "Зареєструйтесь і користуйтесь усім функціоналом безкоштовно протягом 14 днів. Без прив'язки картки та без оплати на старті.",
      submit: "Додати",
      hasAccount: "Вже маєте акаунт?",
      loginLink: "Увійти",
    },
  },
  forgotPassword: {
    title: "Забули пароль?",
    description:
      "Введіть e-mail, привʼязаний до акаунта. Ми надішлемо посилання для скидання пароля.",
    email: { label: "E-mail", placeholder: "name@voopty.com" },
    submit: "Скинути пароль",
    backToLogin: "Повернутися до входу",
  },
};

export default uk;
