// *** Task 4: Create a module that exports a single function using default export. Import and use this function in another script. ***

export default function checkPalindrome(num) {
    let rem;
    const temp = num;
    let reverseNum = 0;

    while(num > 0) {
        rem = num % 10;
        reverseNum = Math.floor(reverseNum * 10 + rem);
        num = Math.floor(num /10);
    }

    
    if(temp === reverseNum) {
        return "Palindrome";
    }else{
        return "Not palindrome";
    }
}
