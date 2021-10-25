// peice of code that runs on a condition
useEffect(() => {
    // this is where the code runs..
    
    database.collection("people")
    .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
       }, []);