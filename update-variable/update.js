
const inputs=document.querySelectorAll('.controls input');
console.log(inputs)

function hadelUpdate(){
    // console.log(this.dataset)
    const suffix=this.dataset.sizing||' ';

    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
    document.documentElement.style.setProperty("--base",this.value)

}

inputs.forEach(x=>x.addEventListener('change', hadelUpdate))
inputs.forEach(x=>x.addEventListener('mousemove', hadelUpdate));


    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
   let dd= inventors.filter(x=>{
       if(x.year>=1500&& x.year<1600)return true //true mean keep it
    //    return x.year.toString().substring(0,2)=='15'
    })
    console.table(dd)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    let names=inventors.map(x=>x.first+' '+x.last)
    console.log(names)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    let ascetnt=inventors.map(x=>x.year).sort()
    console.log(ascetnt)
    //the second way:
    let order=inventors.sort((a,b)=>a.year-b.year)
    console.table(order)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    let numYears=inventors.reduce((total,b)=>total+(b.passed-b.year),0)
    console.log(numYears)

    // 5. Sort the inventors by years lived
    let liveYears=inventors.sort((a,b)=>{
        let avg=(b.passed-b.year)-(a.passed-a.year);
        console.log(avg)

        return avg

    })
    // console.table(liveYears)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//  const category = document.querySelector('.mw-category');
//     const links = Array.from(category.querySelectorAll('a'));
//     const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));



//     let peopleParis=people.filter(x=>{
//        return x.indexOf('de')>-1
//     })
// console.log(peopleParis)

    // 7. sort Exercise
    // Sort the people alphabetically by last name
//     let pepoleLast=people.map(x=>{
//         // console.log(x.split(', ')[1])
//         return x.split(', ')[1]
//    })
//    console.log(pepoleLast)
//     let lastName=pepoleLast.sort((a,b)=>a-b)
//     console.table(lastName)

const alpha=people.sort((lastOne,nextOne)=>{
    let [alast,anext]=lastOne.split(', ')
    let [blast,bnext]=nextOne.split(', ')
    return anext>bnext?1:-1;

})
console.table(alpha)



    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck',
     'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
 let numCounter=data.reduce((obj,item)=>{
if(!obj[item]){
    obj[item]=0
}
obj[item]++;
return obj

 },{})
// console.table(numCounter)