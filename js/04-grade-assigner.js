let gradeNum
gradeNum = parseInt(prompt('Please enter your grade between 1-100'))

switch (true) {
    case (90<=gradeNum && gradeNum<=100):
        console.log('You received an A')
        break
    case (80<=gradeNum && gradeNum<90):
        console.log('You received an B')
		break
    case (70<=gradeNum && gradeNum<80):
        console.log('You received an C')
		break
    case (60<=gradeNum && gradeNum<70):
        console.log('You received an D')
		break
    case (0<gradeNum && gradeNum<60):
        console.log('You received an F')
		break
    default: 
       alert('Only numbers between 1 and 100 are accepted. Please enter a number between 1 - 100')
    }
