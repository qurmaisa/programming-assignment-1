# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Калькулятор Массы Титана

**What does your calculator do?**  
My calculator calculates mass of titan by using formula. Than using result for classificate threat of titan.


---

## 2. Inputs

List and explain all inputs you used.

| Input Name        | Unit | What it Represents                             |
|-------------------|------|-----------------------------------------------|
| Scout Name        | –    | Name of the user (scout)                     |
| Titan Height      | m    | Titan’s height                                |
| Titan Width       | m    | Titan’s width                                 |
| Abnormal Behavior | –    | Whether the titan is abnormal (yes / no)     |

Explain in words:  
I use the scout name to make the calculator more personal and to show I can work with text input.

Height and width are needed to estimate the titan’s size and mass, and to decide how dangerous it is.

The abnormal behavior checkbox is there because abnormal titans are more dangerous, so if it’s checked, the calculator gives an extra warning.

---

## 3. Process (Calculation Logic)

Calculates the approximate volume of the Titan:
   `volume = height * (width^2) * 0.5`
Calculates the mass with reduced density:
   `massKg = volume * (1000 / 8)`

**Steps:**
1. The program reads the input values from the HTML form (what the user typed or selected).
2. If necessary, it converts the values to the correct units (for example, from cm to meters).
3. Then it uses these values to perform the main calculation.
4. The result is stored in a variable so it can be shown on the page or used later in other functions. 

---

## 4. Conditional Logic (if / else)

If Heght < 5 → Small titan  
If Heght 5 - 59 → Medium titan  
If Heght 59 > → Collossal titan  

Explain why you chose these ranges (if using real model, mention it).
I use this ranges because these ranges from anime Attack on Titans.
---

## 5. Output

What does your program show to the user?

- Calculated value  
- Category or interpretation  
- Personalized message 
- Optional: binary output

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero?  Programm ask to change it
- User enters negative number?  Programm ask to change it
- User leaves input empty?  Programm ask to change it

Explain how your program handles this.
if (!name || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
    greetingEl.textContent = "Ошибка данных!";
    massResultEl.textContent = "Введите имя и положительные числа.";
    ...
    return;
}

in this part of my programm I use algorithm that check users input. isNan = for words and <= 0 for numbers.
---

## 7. Optional Features (If You Added Any)

Added input validation: if the height is not a number or out of range, an error message is shown.
Improved UI: the result updates instantly without reloading, and each titan category is highlighted with a different color.
For each titan category, a short description / threat level is also displayed, not just the class name.

---

## 8. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button  

---

## 9. AI Usage (If Used)
Yes, I used AI for coding part. But I created idea of calculator, whole design and some parts of code. Im fully understand now how css html and js work together and how to use it for my own site in future.

---

## 10. Reflection

What did you learn from this assignment?
I learnt a lot. For example: before I thought site its only html and all. But now Im understand how it works and how to use folders, how programm search files in folder.
