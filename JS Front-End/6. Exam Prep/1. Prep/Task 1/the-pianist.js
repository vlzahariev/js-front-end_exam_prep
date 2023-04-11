function solve(inputLst) {
    let n = Number(inputLst[0]) + 1;
    let operList = inputLst.slice(n)
    let songs = [];

    for (let i = 1; i < n; i++) {
        let data = inputLst[i].split("|");
        let piece = data[0];
        let composer = data[1];
        let key = data[2];

        let song = { 'piece': piece, "composer": composer, "key": key };
        songs.push(song);
    }

    for (const command of operList) {
        let data = command.split('|')
        let oper = data[0];
        if (oper === "Stop") {
            for (const song of songs) {
                console.log(`${song.piece} -> Composer: ${song.composer}, Key: ${song.key}`);
            }
            break
        }

        if (oper === 'Add') {
            let pieceOp = data[1];
            let composerOp = data[2];
            let keyOp = data[3];
            let currentObj = { 'piece': pieceOp, "composer": composerOp, "key": keyOp };
            let added = false;
            for (const song of songs) {
                if (song.piece === currentObj.piece) {
                    console.log(`${pieceOp} is already in the collection!`);
                    added = true;
                }}
            if (!added) {
                songs.push(currentObj);
                console.log(`${pieceOp} by ${composerOp} in ${keyOp} added to the collection!`);                                    
            }
            
        } else {
            if (oper === 'Remove') {
                let pieceOp = data[1];
                let bool = 0;
                let checker = 0;
                for (const song of songs) {
                    if (song.piece === pieceOp) {
                        songs.splice(checker, 1);
                        console.log(`Successfully removed ${pieceOp}!`);
                        bool = 1;
                        break
                    }
                    checker += 1;
                }

                if (bool === 0) {
                    console.log(`Invalid operation! ${pieceOp} does not exist in the collection.`);
                }
                

            } else {
                if (oper === 'ChangeKey') {
                    let pieceOp = data[1];
                    let newKey = data[2];
                    let bool1 = 0;

                    for (const song of songs) {
                        if (song.piece === pieceOp) {
                            song.key = newKey
                            console.log(`Changed the key of ${pieceOp} to ${newKey}!`)
                            bool1 = 1;
                        }
                    }
                    if (bool1 === 0) {
                        console.log(`Invalid operation! ${pieceOp} does not exist in the collection.`);
                }}

            }
        }
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])