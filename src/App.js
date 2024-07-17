import logo from './logo.svg';
import './App.css';
import TenthStudent from './Classes/TenthStudent';

function App() {

  // let sanjay=new TenthStudent();
  // sanjay.telMarks=81;
  // sanjay.hindiMarks=81;
  // sanjay.engMarks=81;
  // sanjay.mathsMarks=81;
  // sanjay.sciMarks=81;
  // sanjay.socMarks=81;
  // sanjay.calculateResult()
  
  console.log(TenthStudent.passMarks);

  TenthStudent.aboutTenth();

let actorsOfTollywood=["chiranjeevi",
                       "balakrishna",
                       "venkatesh",
                       "nagarjuna",
                       "raviteja",
                       "prabhas",
                       "pawankalyan",
                       "maheshbabu",
                       "ntr",
                       "ram charan",
                       "alluarjun",
                       "vijay devarakonda",
                       "nitin",
                       "nani",
                       "naga chaitanya",
                       "kalyan ram",
                       "akhil",
                       "varun tej",
                       "ram",
                       "allari naresh",
                       "sai dharamtej",
                       "saikumar",
                       "jagapatibabu",
];


  return (
    <div className="App">
    <h1>Learning Array Methods</h1>
    <button onClick={()=>{
      console.log( actorsOfTollywood.length);
      for(let i=0;i< actorsOfTollywood.length; i++){
        console.log(actorsOfTollywood[i]);
      }
    }}>Length</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood[8]);
      console.log(actorsOfTollywood.at(8));
    }}>at</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      console.log(actorsOfTollywood.toString());
      console.log(actorsOfTollywood.join("--->"));
    }}>toString,join</button>

    <button onClick={()=>{
      actorsOfTollywood.push("jagapatibabu");
      console.log(actorsOfTollywood);
    }}>push</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.pop();
      console.log(actorsOfTollywood);
    }}>pop</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.shift();
      console.log(actorsOfTollywood);
    }}>shift</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.unshift("suman");
      console.log(actorsOfTollywood);
    }}>unshift</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      //actorsOfTollywood.splice(10,5);
      // actorsOfTollywood.splice(
      // 10,
      // 6,
      // "mohanbabu",
      // "vishnu",
      //  "manoj"
      //   );
      actorsOfTollywood.splice(0,0,"nagabau");
      console.log(actorsOfTollywood);
    }}>splice</button>

    <button onClick={()=>{
      console.log(actorsOfTollywood);
      //delete actorsOfTollywood[7];
      actorsOfTollywood.splice(7,1);
      console.log(actorsOfTollywood);
    }}>delete</button>

    <button onClick={()=>{
    let tamilHeros =["rajnikanth","ajith kumar","suriya"];
    let hindiHeros =["salmankhan","shah rukh khan","hrithik roshan","ranveer singh"];

    let indianHeros = tamilHeros.concat(hindiHeros);
    console.log(tamilHeros);
    console.log(hindiHeros);
    console.log(indianHeros);

    let indianHeros1=[...tamilHeros,...hindiHeros];
    console.log(indianHeros1);
    }}>concat</button>

    <button onClick={()=>{
      let tdpPoliticalLeaders=["chandrababu naidu",
                                          "lokesh",
                                     ["balakrishna","bharat"],
                                     "rammohan naidu",
                                     "acham naidu",
                                  ]

        let ysrcpPoliticalLeaders=["jaganmohan reddy","vijaysai reddy","yv subba reddy"] 

        let jspPoliticalLeaders=["pawankalyan","manohar","konathala ramakrishna"]

        let politicalLeaders=[tdpPoliticalLeaders,ysrcpPoliticalLeaders,jspPoliticalLeaders];
        console.log(politicalLeaders);
        //console.log(politicalLeaders[2][1]);
        let allLeaders=politicalLeaders.flat(2);
        console.log(allLeaders);
    }}>flat</button>

    <button onClick={()=>{
      let teluguTopHeros=actorsOfTollywood.slice(5,9);
          console.log(teluguTopHeros);
    }}>slice</button>

    <button onClick={()=>{
      let filledArr=actorsOfTollywood.fill("boxoffice",10);
     console.log(filledArr);
    }}>fill</button>

    <br></br>

    <button onClick={()=>{
      let chiranjeeviMovieTitle = "khaid no 150";
     let arr= Array.from(chiranjeeviMovieTitle);
     console.log(chiranjeeviMovieTitle);
     console.log(arr);
    }}>from</button>

    <button onClick={()=>{
     let result= actorsOfTollywood.includes("nitin");
     console.log(result);
    }}>includes</button>


    <button onClick={()=>{
      console.log(actorsOfTollywood);
      actorsOfTollywood.reverse();
      console.log(actorsOfTollywood);
    }}>reverse</button>

    <button onClick={()=>{
    // for(let i=0; i<actorsOfTollywood.length;i++){
    //   console.log(actorsOfTollywood[i]);
    // }
      actorsOfTollywood.forEach((ele,i)=>{
        console.log(`${i}-${ele}`);
      });
    }}>forEach</button>

    <button onClick={()=>{
      let marksArr = [81,55,92,41,63,78,56,65,96,86,99,
        81,55,92,41,63,78,56,65,96,86,99,81,55,92,41,63,
        78,56,65,96,86,99,81,55,92,41,63,78,56,65,96,86,
        99,81,55,92,41,63,78,56,65,96,86,99,61,55,85,69
      ];
      let result= marksArr.every((ele,i)=>{
      return ele >=35
      })

      if (result == true) {
        console.log("student passed in tenth");
      }else{
        console.log("student failed in tenth");
      }
    }}>every</button>


    <button onClick={()=>{
    let marksArr = [81,55,92,41,63,78,56,25,96,86,99,
      81,55,92,41,63,78,56,65,66,86,99,81,55,92,41,63,
      78,56,65,96,86,99,81,55,92,41,63,78,56,65,96,86,
      99,81,55,92,41,63,78,56,65,96,86,99,61,55,55,69
    ];
    let result= marksArr.some((ele,i)=>{
      return ele <35;
    });
    if (result==true) {
      console.log("student failed in tenth");
    }else{
    console.log("student passed in tenth");
    }
    }}>some</button>

    <button onClick={()=>{
      let marksArr = [81,55,92,41,63,78,56,25,96,86,99,
        81,55,92,41,63,78,56,65,66,86,99,81,55,92,41,63,
        78,56,65,96,86,99,81,55,92,41,63,78,56,65,96,86,
        99,81,55,92,41,63,78,56,65,96,86,99,61,55,55,69
      ];
      let filledArr=marksArr.filter((ele,i)=>{
        return ele %2==0;
      });
      console.log(filledArr);
    }}>filter</button>

    <button onClick={()=>{
      let marksArr=[71,84,82,89,91,97,54,65,35,61,68,67,72,76,93,61,65];

      let val= marksArr.findLast((ele,i)=>{
      return ele >90
      });

      let ind= marksArr.findLastIndex((ele,i)=>{
        return ele >90
        });
   console.log(val);
   console.log(ind);
    }}>find/findIndex/findLast/findLastIndex</button>

    <br></br>

    <button onClick={()=>{
      console.log(actorsOfTollywood.indexOf("nitin"));
      console.log(actorsOfTollywood.lastIndexOf("nitin"));
    }}>indexOf & lastIndexOf</button>

    <button onClick={()=>{
      let movieName=["pushpa 2"];
    console.log(Array.isArray(movieName));
    }}>isArr</button>

    <button onClick={()=>{
      //let marksArr=[71,84,82,89,91,97,54,65,35,61,68,67,72,76,93,61,65];

      let marksArr= ["A","N","D","H","R","A"]
     let totalMarks= marksArr.reduceRight((tot=0,ele,i)=>{
      return(tot+=ele);
     });
     console.log(totalMarks);
    }}>reduce/reduceRight</button>

    <button onClick={()=>{
     // console.log(actorsOfTollywood);
      //actorsOfTollywood.sort();
     // console.log(actorsOfTollywood);
     let marksArr=[81,82,64,67,92,15,45,62,32,54,71,214,123,654,987]
      console.log(marksArr);
      marksArr.sort((a,b)=>{
        return a-b;
      });
      console.log(marksArr)
    }}>sort</button>

    <button onClick={()=>{
      let indiaPrimeMinisters=["narendra modi",
                               "manmohan singh",
                               "atal bihari vajpayee",
                               "pv narasimharao",
                               "indira gandhi",
                               "rajiv gandhi",
                               "jawharlal nehru"
                               ];
      let newArr=indiaPrimeMinisters.map((ele,i)=>{
        return `shri.${ele} ji`;
      });
      console.log(indiaPrimeMinisters);
      console.log(newArr);

      let marksDurinCorona=[26,30,28,65,32,34];
      let marksWithBonous=marksDurinCorona.map((ele,i)=>{
        return ele+10;
      })
      console.log(marksDurinCorona);
      console.log(marksWithBonous);
    }}>map</button>
    {/* {actorsOfTollywood.map((ele,i)=>{
      return <h2>{ele}</h2>; */}
    

    </div>
  );
}

export default App;
