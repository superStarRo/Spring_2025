public class Airplane extends AirTransport {
    // Объект GPS для самолёта
    private GPS gps;
    // Объект радар для самолёта
    private Radar radar;

    // Конструктор
    public Airplane(String name, String color, double weight, double maxSpeed, double fuelCapacity,
                    double maxAltitude, String engineType, int numPassengers, double maxFlightSpeed,
                    double gpsRange, double radarRange) {
        // Передаем все параметры в конструктор родительского класса AirTransport
        super(name, color, weight, maxSpeed, fuelCapacity, maxAltitude, engineType, numPassengers, maxFlightSpeed);
        this.gps = new GPS(gpsRange);  // Инициализируем GPS с заданным диапазоном
        this.radar = new Radar(radarRange);  // Инициализируем радар с заданным диапазоном
    }

    // Реализация абстрактных методов из AirTransport
    @Override
    public void takeOff() {
        // Логика взлета для самолета
        System.out.println(getName() + " начинает взлет.");
    }

    @Override
    public void land() {
        // Логика посадки для самолета
        System.out.println(getName() + " садится.");
    }

    // Переопределение метода displayInfo для отображения информации о самолете
    @Override
    public void displayInfo() {
        super.displayInfo();  // Показываем общую информацию из родительского класса
        gps.displayInfo();  // Показываем информацию о GPS
        radar.displayInfo();  // Показываем информацию о радаре
    }

    // Метод для активации GPS
    public void activateGPS() {
        gps.activateSystem();  // Активируем GPS
    }

    // Метод для деактивации GPS
    public void deactivateGPS() {
        gps.deactivateSystem();  // Деактивируем GPS
    }

    // Метод для отображения текущего местоположения с помощью GPS
    public void showLocation() {
        gps.showLocation();  // Показываем местоположение с помощью GPS
    }

    // Метод для активации радара
    public void activateRadar() {
        radar.activateSystem();  // Активируем радар
    }

    // Метод для деактивации радара
    public void deactivateRadar() {
        radar.deactivateSystem();  // Деактивируем радар
    }

    // Метод для обнаружения объектов с помощью радара
    public void detectObjects(double distance) {
        radar.detectObject(distance);  // Проверяем объекты с помощью радара
    }

    // Геттеры и сеттеры для GPS и радара
    public GPS getGps() {
        return gps;  // Возвращаем объект GPS
    }

    public void setGps(GPS gps) {
        this.gps = gps;  // Устанавливаем новый объект GPS
    }

    public Radar getRadar() {
        return radar;  // Возвращаем объект радар
    }

    public void setRadar(Radar radar) {
        this.radar = radar;  // Устанавливаем новый объект радар
    }

    // Реализация метода refuel (заправка)
    @Override
    public void refuel(double amount) {
        // Проверяем, что количество топлива не превышает вместимость
        if (amount > 0 && currentFuelLevel + amount <= fuelCapacity) {
            currentFuelLevel += amount;  // Увеличиваем уровень топлива
            System.out.println(getName() + " заправлен на " + amount + " литров. Текущий уровень топлива: " + currentFuelLevel + " литров.");
        } else {
            System.out.println("Ошибка: Превышен лимит топлива или введено неверное количество.");
        }
    }

    // Реализация метода checkFuelLevel (проверка уровня топлива)
    @Override
    public void checkFuelLevel() {
        // Печатаем текущий уровень топлива
        System.out.println(getName() + " - текущий уровень топлива: " + currentFuelLevel + " литров.");
    }
}
