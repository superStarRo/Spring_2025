public abstract class AirTransport extends TransportVehicles {
    // Максимальная высота полета (в метрах)
    protected double maxFlightHeight;
    // Тип двигателя (реактивный, поршневой, роторный и т.д.)
    protected String engineType;
    // Количество пассажиров
    protected int numPassengers;
    // Максимальная скорость полета (км/ч)
    protected double maxFlightSpeed;

    // Конструктор
    public AirTransport(String name, String color, double weight, double maxSpeed, double fuelCapacity,
                        double maxFlightHeight, String engineType, int numPassengers, double maxFlightSpeed) {
        super(name, color, weight, maxSpeed, fuelCapacity);  // Вызов конструктора родительского класса TransportVehicles
        this.maxFlightHeight = maxFlightHeight;  // Инициализируем максимальную высоту полета
        this.engineType = engineType;  // Инициализируем тип двигателя
        this.numPassengers = numPassengers;  // Инициализируем количество пассажиров
        this.maxFlightSpeed = maxFlightSpeed;  // Инициализируем максимальную скорость полета
    }

    // Абстрактные методы для специфической функциональности
    public abstract void takeOff();  // Метод для взлета (должен быть реализован в наследующих классах)
    public abstract void land();  // Метод для посадки (должен быть реализован в наследующих классах)

    // Геттеры для получения значений атрибутов
    public double getMaxFlightHeight() { return maxFlightHeight; }
    public String getEngineType() { return engineType; }
    public int getNumPassengers() { return numPassengers; }
    public double getMaxFlightSpeed() { return maxFlightSpeed; }

    // Сеттеры для изменения значений атрибутов и вывода информации в консоль
    public void setMaxFlightHeight(double maxFlightHeight) {
        this.maxFlightHeight = maxFlightHeight;  // Обновляем максимальную высоту полета
        System.out.println("Максимальная высота полета: " + maxFlightHeight + " м.");
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;  // Обновляем тип двигателя
        System.out.println("Тип двигателя: " + engineType);
    }

    public void setNumPassengers(int numPassengers) {
        this.numPassengers = numPassengers;  // Обновляем количество пассажиров
        System.out.println("Количество пассажиров: " + numPassengers);
    }

    public void setMaxFlightSpeed(double maxFlightSpeed) {
        this.maxFlightSpeed = maxFlightSpeed;  // Обновляем максимальную скорость полета
        System.out.println("Максимальная скорость полета: " + maxFlightSpeed + " км/ч.");
    }

    // Переопределение метода displayInfo для добавления специфической информации о воздушном транспорте
    @Override
    public void displayInfo() {
        super.displayInfo();  // Вызов родительского метода для отображения общей информации
        System.out.println("Макс. высота полета: " + maxFlightHeight + " м");  // Выводим максимальную высоту полета
        System.out.println("Тип двигателя: " + engineType);  // Выводим тип двигателя
        System.out.println("Количество пассажиров: " + numPassengers);  // Выводим количество пассажиров
        System.out.println("Макс. скорость полета: " + maxFlightSpeed + " км/ч");  // Выводим максимальную скорость полета
    }
}
