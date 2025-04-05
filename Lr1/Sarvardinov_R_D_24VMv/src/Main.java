public class Main {
    public static void main(String[] args) {
        // Создаем объект лодки с заданными характеристиками
        Boat myBoat = new Boat("SpeedBoat", "Blue", 1500, 80, 200, 100, 50, false);

        // Показываем информацию о лодке и радаре
        myBoat.displayInfo();

        // Активация радара
        myBoat.activateRadar();

        // Обнаружение объектов с помощью радара на определенном расстоянии
        myBoat.detectObjects(100);

        // Заправляем лодку
        myBoat.refuel(50);

        // Проверка уровня топлива
        myBoat.checkFuelLevel();

        // Плавание
        myBoat.sail();

        // Остановка лодки (ставим на якорь)
        myBoat.anchor();

        // Деактивация радара
        myBoat.deactivateRadar();

        // Создаем машину с параметрами
        Car car = new Car("BMW",
                "Черный", 1500, 220,
                50, 500, 4, 200, 1000);

        // Отображаем информацию о машине и GPS
        car.displayInfo();

        // Активируем GPS
        car.activateGPS();

        // Показать местоположение
        car.showLocation();

        // Заправляем машину
        car.refuel(30);

        // Проверяем уровень топлива
        car.checkFuelLevel();

        // Создание объекта самолета
        Airplane airplane = new Airplane(
                "Боинг 747",           // Название
                "Белый",                // Цвет
                183500,                 // Вес (в кг)
                900,                    // Максимальная скорость (км/ч)
                200000,                 // Вместимость топлива (в литрах)
                13000,                  // Максимальная высота (м)
                "Реактивный",           // Тип двигателя
                400,                    // Количество пассажиров
                950,                    // Максимальная скорость полета (км/ч)
                1000,                   // Диапазон GPS (км)
                500                     // Диапазон радара (км)
        );

        // Показать информацию о самолете
        airplane.displayInfo();

        // Включить GPS и показать местоположение
        airplane.activateGPS();
        airplane.showLocation();

        // Включить радар и обнаружить объект
        airplane.activateRadar();
        airplane.detectObjects(300);

        // Выполнить взлет и посадку
        airplane.takeOff();
        airplane.land();

        // Заправка самолета
        airplane.refuel(50000);
    }
}
