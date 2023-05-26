class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25);
        this.attendance.fill(null);
        this.attendanceCounter = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (!this.grades.length) {
            return null;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendanceCounter >= this.attendance.length) {
            throw new Error("Attendance array is full");
        }
        this.attendance[this.attendanceCounter] = true;
        this.attendanceCounter++;
    }

    absent() {
        if (this.attendanceCounter >= this.attendance.length) {
            throw new Error("Attendance array is full");
        }
        this.attendance[this.attendanceCounter] = false;
        this.attendanceCounter++;
    }

    getAttendancePercentage() {
        const attendanceCount = this.attendance.filter((item) => item !== null).length;
        return attendanceCount / this.attendance.length;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendancePercentage = this.getAttendancePercentage();
        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

    
}

