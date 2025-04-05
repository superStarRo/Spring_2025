public class Boat extends WaterTransport {
    // Объект радара для лодки
    private Radar radar;

    // Конструктор
    public Boat(String name, String color, double weight, double maxSpeed, double fuelCapacity, double displacement, double radarRange, boolean isElectric) {
        // Передаем все параметры в родительский класс WaterTransport
        super(name, color, weight, maxSpeed, fuelCapacity, displacement, isElectric);
        this.radar = new Radar(radarRange);  // Инициализируем радар с указанным диапазоном
    }

    // Реализация абстрактных методов из WaterTransport
    @Override
    public void sail() {
        System.out.println(getName() + " начинает плавание.");  // Плавание лодки
    }

    @Override
    public void anchor() {
        System.out.println(getName() + " встал на якорь.");  // Лодка встала на якорь
    }

    // Переопределение метода displayInfo для отображения информации о лодке
    @Override
    public void displayInfo() {
        super.displayInfo();  // Показываем информацию из родительского класса
        radar.displayInfo();  // Показываем информацию о радаре
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
        radar.detectObject(distance);  // Обнаруживаем объекты с помощью радара на заданном расстоянии
    }

    // Реализация метода refuel для заправки лодки
    @Override
    public void refuel(double amount) {
        if (amount > 0) {  // Проверка на корректное количество топлива
            if (currentFuelLevel + amount <= fuelCapacity) {  // Проверка на превышение максимального уровня топлива
                currentFuelLevel += amount;  // Увеличиваем текущий уровень топлива
                System.out.println(getName() + " заправлен на " + amount + " литров. Текущий уровень топлива: " + currentFuelLevel + " литров.");
            } else {
                System.out.println("Ошибка: Превышен максимальный уровень топлива для " + getName() + ". Максимум: " + fuelCapacity + " литров.");
            }
        } else {
            System.out.println("Ошибка: Некорректное количество топлива для заправки.");  // Ошибка при попытке заправки неправильным количеством топлива
        }
    }

    // Реализация метода checkFuelLevel для проверки уровня топлива
    @Override
    public void checkFuelLevel() {
        System.out.println("Текущий уровень топлива в " + getName() + ": " + currentFuelLevel + " литров.");  // Вывод текущего уровня топлива
    }

    // Геттеры и сеттеры для радара
    public Radar getRadar() {
        return radar;  // Возвращаем объект радара
    }

    public void setRadar(Radar radar) {
        this.radar = radar;  // Устанавливаем новый объект радара
    }
}
