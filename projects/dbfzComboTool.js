var scaleTableMedium = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.3, 0.3, 0.3, 0.25, 0.25, 0.25, 0.2, 0.2, 0.2, 0.15];
var scaleTableLight = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 0.15, 0.15, 0.15, 0.1];
var scaleTableOverhead = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

// Default content, used for reset purposes, is set in init()
var defaultMovesDivContent = null;

var moves = null;

var characters = [];

var currentCharacter = null;

var comboMoveIds = [];

var comboTableHeaderData = "<tr> <th>Number</th> <th>Proration</th> <th>Move</th> <th>Damage</th> <th>Scaling</th> <th>Combo_Dmg</th> </tr>";

var uniqueTableRowId = 0;

function init() {
    defaultMovesDivContent = document.getElementById("movesDiv").innerHTML;

    // Characters and move data are stored in dbfzMoveData.js and these are loaded in on the HTML page after this script
    // These vars can only be initialized after both scripts have been loaded in
    characters = [gokuSsj, Trunks, vegito];
    currentCharacter = gokuSsj
}

function generateCharacterSelectButtons() {

    let characterSelectDivContent = document.getElementById("characterSelectDiv").innerHTML;

    characters.forEach(character => {
        var characterButton = "<input type='button' onClick='setCharacter(\"" + character.name + "\");' value='" + character.name + "' />";
        characterSelectDivContent += characterButton;
    });

    document.getElementById("characterSelectDiv").innerHTML = characterSelectDivContent;
}

function setCharacter(characterName) {
    let character = characters.find(char => char.name == characterName);

    if (character === undefined || character === null) {
        alert("Character not found")
        return;
    }

    // Rebuild the movesDiv with moves from the selected character, while also rebuilding the moves array
    let movesDivContent = "<h3>Moves List</h3>";
    movesDivContent += "<h4>Universal Normals</h4>";

    moves = [];

    defaultMoves.forEach(move => {
        let moveButton = "<input type='button' onClick='addMove(\"" + move.id + "\");' value='" + move.id + "' />";
        movesDivContent += moveButton;

        moves.push(move);
    });

    movesDivContent += "<br /><hr />";
    movesDivContent += "<h4>Specials</h4>";
    
    // Grounded specials
    character.specials.forEach(special => {
        if (!special.id.includes("j.")) {
            let moveButton = "<input type='button' onClick='addMove(\"" + special.id.split("/")[0] + "\");' value='" + special.id + "' />";
            movesDivContent += moveButton;

            moves.push(special);
        }
    });

    // Aerial specials
    character.specials.forEach(special => {
        if (special.id.includes("j.")) {
            let moveButton = "<input type='button' onClick='addMove(\"" + special.id.split("/")[1] + "\");' value='" + special.id + "' />";
            movesDivContent += moveButton;

            moves.push(special);
        }
    });

    document.getElementById("movesDiv").innerHTML = movesDivContent;
}

function addMove(moveId) {
    comboMoveIds.push(moveId);
    redrawTable();
}

function redrawTable() {
    let newTableDataContent = comboTableHeaderData;
    
    let moveNumberInCombo = 0;
    let proration = 0;

    let scaleTable = moves.find(x => x.id === comboMoveIds[0]).scaleTable;

    let comboCurrentDamage = 0;
    
    // Loop through each move in the combo and create a new table row for each move
    comboMoveIds.forEach(function(moveId) {
        let move = moves.find(x => x.id === moveId);
        let scaling = 10000; // gigantic init value, meant to be overwritten

        // Pick the current scaling or the last one in the array
        scaling = calculateScaling(scaleTable, proration);

        // Loop through every damage value in case of multi-hit moves
        move.damage.forEach(function(currentHitDamage, index) {
            let currentScaling = scaling;

            if (index > 0) {
                // Handle initial proration of combo-starting moves (the initial proration also applies to multi-hit attacks, like Adult Gohan's 5L)
                if (move.initialProration !== undefined) {
                    currentScaling = calculateScaling(scaleTable, proration + move.initialProration);
                }
                else {
                    currentScaling = calculateScaling(scaleTable, proration + 1);
                }
            }

            let scaledDamage = currentHitDamage * currentScaling;
            scaledDamage = Math.round(scaledDamage);    // Round damage just like the game's damage scaling calulation

            comboCurrentDamage += scaledDamage;

            let scalingPercentage = Math.round(currentScaling * 100) + "%"

            // Styling
            let rowCssClasses = "''";

            if (index > 0) {
                rowCssClasses = "multiHitMove";
            }

            // Create and add new row
            let generatedDeleteButtonContent = "<input type='button' onclick='removeRowFromComboTable(this.parentNode.parentNode.children[0].innerHTML - 1);' value='X'>"
            let newRowContent = "<tr class=" + rowCssClasses + "> <td style='font-weight: bold;'>" + (moveNumberInCombo + 1) + "</td> <td>" + (proration + 1) + "</td> <td>" + move.id + "</td> <td>" + scaledDamage + "</td> <td>" + scalingPercentage + "</td> <td>" + comboCurrentDamage + "</td> <td>" + generatedDeleteButtonContent + " </tr>"
            newTableDataContent += newRowContent;            
        });

        // Handle initial proration of combo-starting moves
        if (move.initialProration !== undefined) {
            proration += move.initialProration;
        }

        proration += move.proration;
        ++moveNumberInCombo;
    });

    document.getElementById("comboTableBody").innerHTML = newTableDataContent;
}

function clearComboTable() {
    document.getElementById("comboTableBody").innerHTML = comboTableHeaderData;
    comboMoveIds = [];
}

function removeRowFromComboTable(rowNumber) {
    // Update the movesArray
    if (comboMoveIds.length < 2) {
        comboMoveIds = [];
        document.getElementById("comboTableBody").innerHTML = comboTableHeaderData;
    }
    else {
        comboMoveIds.splice(rowNumber, 1);
        redrawTable();
    }
}

function calculateScaling(scaleTable, proration) {
    let scaling = null;

    if (proration < scaleTable.length) {
        scaling = scaleTable[proration];
    }
    else {
        scaling = scaleTable[scaleTable.length - 1];
    }

    return scaling;
}