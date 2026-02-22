/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
    // Your code here
    // if (typeof title !== 'string' || title.trim() == "")
    //     return ""
    // let titleList = title.split(" ");
    // const formattedList = titleList.map(function(title){
    //     const trimmedWord = title.trim().toLowerCase();
    //     const finalWord = trimmedWord.length>3 ? trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1) : trimmedWord;
    //     return finalWord
    // })
    // formattedList[0] = formattedList[0].charAt(0).toUpperCase() + formattedList[0].slice(1);
    // return formattedList.join(" ")
    if (typeof title !== "string" || title.trim() === "") {
        return "";
    }
    const smallWords = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];
    const words = title.trim().split(/\s+/);
    const formattedWords = words.map((word, index) => {
        const lowerWord = word.toLowerCase();
        if (index === 0 || !smallWords.includes(lowerWord)) {
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        }
        return lowerWord;
    });
    return formattedWords.join(" ");
}
