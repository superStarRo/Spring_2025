public class Car extends LandTransport {
    // Объект GPS для машины
    private GPS gps;

    // Конструктор
    public Car(String name, String color, double weight, double maxSpeed, double fuelCapacity, double maxLoadCapacity, int numWheels, double enginePower, double gpsRange) {
        // Передаем все параметры в конструктор родителя (LandTransport)
        super(name, color, weight, maxSpeed, fuelCapacity, maxLoadCapacity, numWheels, enginePower);
        this.gps = new GPS(gpsRange);  // Инициализируем объект GPS с указанным диапазоном
    }

    // Реализация метода refuel для заправки автомобиля
    @Override
    public void refuel(double amount) {
        if (amount > 0 && currentFuelLevel + amount <= fuelCapacity) {  // Проверка на корректное количество топлива и превышение лимита
            currentFuelLevel += amount;  // Увеличиваем уровень топлива
            System.out.println(getName() + " заправлен на " + amount + " литров. Текущий уровень топлива: " + currentFuelLevel + " литров.");
        } else {
            System.out.println("Ошибка: Превышен лимит топлива или введено неверное количество.");  // Ошибка, если заправка невозможна
        }
    }

    // Реализация метода checkFuelLevel для проверки уровня топлива
    @Override
    public void checkFuelLevel() {
        System.out.println(getName() + " - текущий уровень топлива: " + currentFuelLevel + " литров.");  // Выводим текущий уровень топлива
    }

    // Переопределение метода displayInfo для отображения информации о машине
    @Override
    public void displayInfo() {
        super.displayInfo();  // Показываем информацию из родительского класса
        gps.displayInfo();  // Показываем информацию о GPS
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
        gps.showLocation();  // Показываем местоположение автомобиля с помощью GPS
    }

    // Геттеры и сеттеры для GPS
    public GPS getGps() {
        return gps;  // Возвращаем объект GPS
    }

    public void setGps(GPS gps) {
        this.gps = gps;  // Устанавливаем новый объект GPS
    }
}
