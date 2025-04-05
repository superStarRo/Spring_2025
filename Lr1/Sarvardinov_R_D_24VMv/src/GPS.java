public class GPS extends NavigationSystem {
    private double range;  // Диапазон GPS в километрах

    // Конструктор
    public GPS(double range) {
        super("GPS");  // Передаем "GPS" в родительский конструктор NavigationSystem
        this.range = range;  // Инициализируем диапазон GPS
    }

    // Реализация абстрактных методов из NavigationSystem

    @Override
    public void activateSystem() {
        setActive(true);  // Устанавливаем систему как активную
        System.out.println("GPS активирован.");  // Выводим сообщение об активации
    }

    @Override
    public void deactivateSystem() {
        setActive(false);  // Устанавливаем систему как неактивную
        System.out.println("GPS деактивирован.");  // Выводим сообщение о деактивации
    }

    @Override
    public void displayInfo() {
        // Выводим информацию о типе системы, диапазоне и ее активности
        System.out.println("Тип системы: " + getSystemType());
        System.out.println("Диапазон GPS: " + range + " км");
        System.out.println("Система активна: " + (isActive() ? "Да" : "Нет"));
    }

    // Метод для отображения текущего местоположения
    public void showLocation() {
        if (isActive()) {  // Если система активна
            System.out.println("Местоположение: Координаты (0, 0)");  // Выводим имитацию местоположения
        } else {  // Если система неактивна
            System.out.println("GPS не активен. Пожалуйста, активируйте систему.");
        }
    }

    // Геттеры и сеттеры для диапазона GPS

    public double getRange() {
        return range;  // Возвращаем диапазон GPS
    }

    public void setRange(double range) {
        this.range = range;  // Устанавливаем новый диапазон GPS
    }
}
