// Задание 1
class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;

	}

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
	 constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
	 constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
	 constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
	 constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// проверка
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);
   
console.log(sherlock.releaseDate);
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);
  
console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 


// Задание 2
class Library {
	constructor (name, books) {
        this.name = name;
        this.books = [];
    }
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (const book of this.books) {
            if (book[type] === value) {
              return book
            }
          }
          return null;
    }

	giveBookByName(bookName) {
		const giveBook = this.books.find((book) => book.name === bookName);
		if (giveBook === undefined) {
			return null;
		} else {
			this.books.splice(giveBook, 1)[0];
			return giveBook;
		}
	}
}


// проверка
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);

library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).name); 

console.log("Количество книг до выдачи: " + library.books.length); 
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);


// Задание 3*
class Student {
    constructor(name) {
      this.name = name
      this.marks = {}
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return
      }
  
      if (!this.marks[subject]) {
        this.marks[subject] = []
      }
  
      this.marks[subject].push(mark)
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) {
        return 0
      }
  
      const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0)
      const average = sum / this.marks[subject].length
      return average
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks)
      if (subjects.length === 0) {
        return 0
      }
  
      const sum = subjects.reduce(
        (acc, subject) => acc + this.getAverageBySubject(subject),
        0
      )
      const average = sum / subjects.length
      return average
    }
  }
  

// проверка
const student = new Student("Олег Никифоров")
student.addMark(5, "химия")
student.addMark(5, "химия")
student.addMark(5, "физика")
student.addMark(4, "физика")
student.addMark(6, "физика")
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75

  