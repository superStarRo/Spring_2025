public abstract class WaterTransport extends TransportVehicles {
    // Водоизмещение (тонны)
    protected double displacement;  // Определяет массу воды, которую транспорт перемещает (важно для судов)

    // Электрический ли транспорт (например, для лодок)
    protected boolean isElectric;   // Флаг, указывающий, является ли транспорт электрическим

    // Обновленный конструктор с дополнительным параметром для электричества
    // Инициализирует основные параметры водного транспорта, передавая их в конструктор родительского класса
    public WaterTransport(String name, String color, double weight, double maxSpeed, double fuelCapacity, double displacement, boolean isElectric) {
        super(name, color, weight, maxSpeed, fuelCapacity);  // Передаем параметры родительскому классу
        this.displacement = displacement;  // Устанавливаем водоизмещение
        this.isElectric = isElectric;     // Устанавливаем, является ли транспорт электрическим
    }

    // Абстрактные методы, которые должны быть реализованы в подклассах
    public abstract void sail();  // Метод для начала плавания (реализуется в подклассах)
    public abstract void anchor(); // Метод для остановки на якоре (реализуется в подклассах)

    // Геттеры
    // Получаем водоизмещение
    public double getDisplacement() {
        return displacement;
    }

    // Проверяем, является ли транспорт электрическим
    public boolean isElectric() {
        return isElectric;
    }

    // Переопределение метода displayInfo для отображения информации о водном транспорте
    @Override
    public void displayInfo() {
        super.displayInfo();  // Вызов метода родительского класса для отображения общей информации
        System.out.println("Водоизмещение: " + displacement + " тонн");  // Выводим водоизмещение
        System.out.println("Электрический транспорт: " + (isElectric ? "Да" : "Нет"));  // Указываем, является ли транспорт электрическим
    }
}
