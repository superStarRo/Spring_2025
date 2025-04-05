public abstract class NavigationSystem {
    // Тип навигационной системы (например, GPS, Радар)
    protected String systemType;

    // Состояние системы (активна или нет)
    protected boolean isActive;

    // Конструктор
    // Инициализирует тип системы и устанавливает её состояние как неактивное
    public NavigationSystem(String systemType) {
        this.systemType = systemType;
        this.isActive = false;  // Система не активна по умолчанию
    }

    // Абстрактный метод для активации навигационной системы
    // Конкретная реализация зависит от типа системы (например, для GPS — получение сигнала)
    public abstract void activateSystem();

    // Абстрактный метод для деактивации навигационной системы
    // Конкретная реализация зависит от типа системы (например, для GPS — потеря сигнала)
    public abstract void deactivateSystem();

    // Абстрактный метод для отображения информации о системе
    // Конкретная реализация зависит от типа системы (например, для GPS — координаты, для радара — дальность)
    public abstract void displayInfo();

    // Геттер для типа системы
    public String getSystemType() {
        return systemType;
    }

    // Геттер для состояния системы (активна или нет)
    public boolean isActive() {
        return isActive;
    }

    // Сеттер для изменения состояния системы (активировать или деактивировать)
    public void setActive(boolean active) {
        isActive = active;
    }
}
