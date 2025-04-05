public abstract class LandTransport extends TransportVehicles {
    // Максимальная грузоподъемность (в килограммах)
    protected double maxLoadCapacity;

    // Количество колес транспортного средства
    protected int numWheels;

    // Мощность двигателя в лошадиных силах
    protected double enginePower;

    // Конструктор с 9 параметрами
    // Передаем параметры в родительский класс и инициализируем специфичные для наземного транспорта поля
    public LandTransport(String name, String color, double weight, double maxSpeed, double fuelCapacity,
                         double maxLoadCapacity, int numWheels, double enginePower) {
        super(name, color, weight, maxSpeed, fuelCapacity);  // Вызов конструктора родительского класса для инициализации общих атрибутов
        this.maxLoadCapacity = maxLoadCapacity;  // Инициализация максимальной грузоподъемности
        this.numWheels = numWheels;  // Инициализация количества колес
        this.enginePower = enginePower;  // Инициализация мощности двигателя
    }

    // Абстрактный метод для заправки транспортного средства
    // Реализация этого метода будет предоставлена в дочерних классах
    @Override
    public void refuel(double amount) {
        // Реализация refuel
    }

    // Абстрактный метод для проверки уровня топлива
    // Реализация этого метода также будет предоставлена в дочерних классах
    @Override
    public void checkFuelLevel() {
        // Реализация checkFuelLevel
    }
}
