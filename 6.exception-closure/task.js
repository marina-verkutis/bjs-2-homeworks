﻿// задание 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value)
    if (Number.isNaN(parsedValue)) {
      throw new Error("Невалидное значение")
    }
    return parsedValue
  }
  
  function validateCount(value) {
    try {
      return parseCount(value)
    } catch (error) {
      return error
    }
  }
  
  // Задание 2
  class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1
      this.side2 = side2
      this.side3 = side3
  
      if (!this.isValidTriangle()) {
        throw new Error("Треугольник с такими сторонами не существует")
      }
    }
  
    isValidTriangle() {
      return (
        this.side1 + this.side2 > this.side3 &&
        this.side1 + this.side3 > this.side2 &&
        this.side2 + this.side3 > this.side1
      )
    }
  
    get perimeter() {
      return this.side1 + this.side2 + this.side3
    }
  
    get area() {
      const p = this.perimeter / 2
      const area = Math.sqrt(
        p * (p - this.side1) * (p - this.side2) * (p - this.side3)
      )
      return Number(area.toFixed(3))
    }
  }
  
  function getTriangle(side1, side2, side3) {
    try {
      const triangle = new Triangle(side1, side2, side3)
      return Object.freeze(triangle)
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует"
        },
        get area() {
          return "Ошибка! Треугольник не существует"
        },
      }
    }
  }