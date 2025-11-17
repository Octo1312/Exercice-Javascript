function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// 1. console.log(isPalindrome('eye'))
    // 2. console.log(isPalindrome('_eye'))    
        // 3. console.log(isPalindrome('race car'))
            // 4. console.log(isPalindrome('not a palindrome'))
                // 5. console.log(isPalindrome('A man, a plan, a canal. Panama'))
                    // 6. console.log(isPalindrome('never odd or even'))
                        // 7. console.log(isPalindrome('nope'))
                            // 8. console.log(isPalindrome('almostomla'))
                                // 9. console.log(isPalindrome('My age is 0, 0 si ega ym.'))
                                    // 10. console.log(isPalindrome('1 eye for of 1 eye.'))
                                        // 11. console.log(isPalindrome('00 (: /-\ 🙂 0-0'))
                                            // 12 console.log(isPalindrome('five|/|four'))