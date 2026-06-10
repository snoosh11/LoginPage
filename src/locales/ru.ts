import uk from "./uk";

const ru: typeof uk = {
  nav: {
    join: "Присоединиться",
    login: "Вход",
  },
  login: {
    panel: {
      subtitle: "Вход для сотрудников",
      title: "Войдите в рабочее пространство школы",
      description:
        "Для владельцев, администраторов и преподавателей. Войдите, чтобы управлять учениками, уроками, оплатами и коммуникацией.",
      features: [
        "Единая система для абонементов, оплат и расписания",
        "Личные кабинеты у всех сотрудников",
        "Личные кабинеты клиентов",
        "Привлечение и удержание клиентов",
        "Детальная статистика",
        "Отчеты и аналитика",
        "Онлайн-запись на уроки",
      ],
      chips: [
        { number: "ПОДДЕРЖКА/НАСТРОЙКА", label: "СОПРОВОЖДЕНИЕ", numberFontSize: 12 },
        { number: "ERP/CRM", label: "управление" },
        { number: "UA/ENG", label: "интерфейс" },
      ],
    },
    form: {
      title: "Вход для сотрудников",
      subtitle: "Войдите как владелец, администратор или преподаватель.",
      googleButton: "Войти через Google",
      divider: "или",
      email: { label: "E-mail", placeholder: "example@gmail.com" },
      password: { label: "Пароль", placeholder: "********" },
      forgotPassword: "Забыли пароль?",
      submit: "Вход",
      noAccess: "Нет доступа?",
      joinLink: "Присоединиться",
    },
  },
  register: {
    panel: {
      subtitle: "Добро пожаловать в Voopty",
      title: "Регистрация нового аккаунта",
      description:
        "Создайте аккаунт для вашего заведения или команды и получите доступ ко всем возможностям платформы.",
      features: [
        "Единая система для абонементов, оплат и расписания",
        "Личные кабинеты у всех сотрудников",
        "Личные кабинеты клиентов",
        "Привлечение и удержание клиентов",
        "Детальная статистика",
        "Отчеты и аналитика",
        "Онлайн-запись на уроки",
      ],
      chips: [
        { number: "ПОДДЕРЖКА/НАСТРОЙКА", label: "СОПРОВОЖДЕНИЕ", numberFontSize: 12 },
        { number: "ERP/CRM", label: "управление" },
        { number: "UA/ENG", label: "интерфейс" },
      ],
    },
    form: {
      title: "Присоединиться",
      subtitle: "Создайте аккаунт для вашего заведения или команды.",
      schoolName: {
        label: "Название заведения или ваше имя",
        placeholder: "Введите название заведения или ваше имя",
      },
      email: { label: "Email", placeholder: "name@voopty.com" },
      phone: { label: "Телефон", placeholder: "+380 (__) ___-__-__" },
      password: { label: "Пароль", placeholder: "Создайте пароль" },
      acceptTerms: "Я принимаю",
      termsLink: "условия соглашения",
      notRobot: "Я не робот",
      sourceQuestion: "Как вы узнали о Voopty?",
      sourceOptions: [
        { value: "google", label: "Google" },
        { value: "facebook", label: "Facebook" },
        { value: "instagram", label: "Instagram" },
        { value: "recommendation", label: "Рекомендация" },
        { value: "other", label: "Другое" },
      ],
      sourceOther: {
        label: "Укажите, пожалуйста",
        placeholder: "Напишите, как узнали о нас",
      },
      alert:
        "Зарегистрируйтесь и пользуйтесь всем функционалом бесплатно 14 дней. Без привязки карты и без оплаты на старте.",
      submit: "Добавить",
      hasAccount: "Уже есть аккаунт?",
      loginLink: "Войти",
    },
  },
  forgotPassword: {
    title: "Забыли пароль?",
    description:
      "Введите e-mail, привязанный к аккаунту. Мы отправим ссылку для сброса пароля.",
    email: { label: "E-mail", placeholder: "name@voopty.com" },
    submit: "Сбросить пароль",
    backToLogin: "Вернуться ко входу",
  },
};

export default ru;
