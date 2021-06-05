// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmi = weight / (height * height)
    while (bmi <= 18.5) {
        return 'Underweight'
    } while (bmi <= 25.0) {
        return 'Normal'
    } while (bmi <= 30.0) {
        return 'Oberweight'
    } while (bmi > 30) {
        return 'Obese'
    }
}

// solutions of other warriors from codewars what i chose for u and me :)