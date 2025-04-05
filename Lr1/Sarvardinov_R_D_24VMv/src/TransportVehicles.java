public abstract class TransportVehicles {
    protected String name;  // Название транспортного средства
    protected String color; // Цвет транспортного средства
    protected double weight; // Вес транспортного средства
    protected double maxSpeed; // Максимальная скорость
    protected double fuelCapacity; // Ёмкость топливного бака
    protected double currentFuelLevel; // Текущий уровень топлива

    // Конструктор
    public TransportVehicles(String name, String color, double weight, double maxSpeed, double fuelCapacity) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.currentFuelLevel = 0; // Начальное значение топлива
    }

    // Абстрактные методы для заправки и проверки топлива
    public abstract void refuel(double amount); // Переопределение метода заправки
    public abstract void checkFuelLevel(); // Переопределение метода проверки уровня топлива

    // Метод для отображения информации о транспортном средстве
    public void displayInfo() {
        System.out.println("Название: " + name);
        System.out.println("Цвет: " + color);
        System.out.println("Вес: " + weight + " кг");
        System.out.println("Макс. скорость: " + maxSpeed + " км/ч");
        System.out.println("Ёмкость бака: " + fuelCapacity + " л");
        System.out.println("Текущее топливо: " + currentFuelLevel + " л");
    }

    // Метод для запуска двигателя
    public void startEngine() {
        System.out.println(name + " запускает двигатель.");
    }

    // Метод для остановки двигателя
    public void stopEngine() {
        System.out.println(name + " останавливает двигатель.");
    }

    // Геттеры
    public String getName() { return name; }
    public String getColor() { return color; }
    public double getWeight() { return weight; }
    public double getMaxSpeed() { return maxSpeed; }
    public double getFuelCapacity() { return fuelCapacity; }

    // Сеттер для цвета (перекраска теперь будет через сервис)
    protected void setColor(String color) {
        this.color = color;
    }
}
