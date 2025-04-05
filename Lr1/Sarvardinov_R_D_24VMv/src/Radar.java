public class Radar extends NavigationSystem {
    // Диапазон действия радара (в метрах)
    private double range; // Диапазон обнаружения радара

    // Конструктор
    // Инициализирует тип системы как "Радар" и устанавливает диапазон обнаружения
    public Radar(double range) {
        super("Радар");  // Устанавливаем тип системы как Радар
        this.range = range;  // Инициализируем диапазон обнаружения радара
    }

    // Реализация метода для активации радара
    // Активирует радар и сообщает, что система активирована
    @Override
    public void activateSystem() {
        if (!isActive()) {  // Если система не активна
            setActive(true);  // Активируем систему
            System.out.println("Радар активирован. Диапазон обнаружения: " + range + " м.");
        } else {
            System.out.println("Радар уже активен.");  // Если радар уже активен
        }
    }

    // Реализация метода для деактивации радара
    // Деактивирует радар
    @Override
    public void deactivateSystem() {
        if (isActive()) {  // Если система активна
            setActive(false);  // Деактивируем систему
            System.out.println("Радар деактивирован.");
        } else {
            System.out.println("Радар уже не активен.");  // Если система уже не активна
        }
    }

    // Реализация метода для отображения информации о радаре
    // Показывает тип системы, её состояние и диапазон
    @Override
    public void displayInfo() {
        System.out.println("Тип системы: " + getSystemType());  // Показываем тип системы
        System.out.println("Состояние системы: " + (isActive() ? "Активен" : "Не активен"));  // Показываем состояние системы
        System.out.println("Диапазон обнаружения: " + range + " м");  // Показываем диапазон обнаружения радара
    }

    // Метод для симуляции обнаружения объектов
    // Проверяет, можно ли обнаружить объект на указанной дистанции
    public void detectObject(double distance) {
        if (isActive()) {  // Если система активна
            if (distance <= range) {  // Если объект в пределах диапазона
                System.out.println("Объект обнаружен на расстоянии " + distance + " м.");
            } else {
                System.out.println("Объект вне диапазона обнаружения. Расстояние: " + distance + " м.");
            }
        } else {
            System.out.println("Радар не активен. Активируйте систему для обнаружения объектов.");  // Если радар не активен
        }
    }

    // Геттеры и сеттеры для диапазона
    // Получение диапазона радара
    public double getRange() {
        return range;
    }

    // Установка нового диапазона для радара
    public void setRange(double range) {
        this.range = range;
    }
}
