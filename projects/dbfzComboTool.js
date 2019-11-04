var scaleTableMedium = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.3, 0.3, 0.3, 0.25, 0.25, 0.25, 0.2, 0.2, 0.2, 0.15];
var scaleTableLight = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 0.15, 0.15, 0.15, 0.1];
var scaleTableOverhead = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

var moves = [
    // Ground normals
    {
        "id": "5L",
        "damage": [400],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "5LL",
        "damage": [700],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "5LLL",
        "damage": [1000],  // TODO: might be 850 in certain situations? (and is character dependant)
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "5M",
        "damage": [700],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "5H",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "5S",
        "damage": [300],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "2L",
        "damage": [400],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "2M",
        "damage": [700],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "2H",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "6M",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableOverhead
    },

    // Air Normals
    {
        "id": "j.5L",
        "damage": [400],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.5LL",
        "damage": [700],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.5LLL",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.5LLL (smash)",
        "damage": [1000], // Should be 1000, need to check in-game
        "proration": 1,
        "scaleTable": scaleTableLight // impossible to trigger in-game, so this is actually unknown
    },
    {
        "id": "j.5M",
        "damage": [700],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.5H",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.2H",
        "damage": [850],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "j.5H (smash)",
        "damage": [1000],
        "proration": 1,
        "scaleTable": scaleTableLight // impossible to trigger in-game, so this is actually unknown
    },

    // Specials
    {
        "id": "Vegito 236L",
        "damage": [130, 130, 130, 600],
        "proration": 2,
        "scaleTable": scaleTableMedium
    },
    {
        "id": "Vegito 236L (2nd hit only)",
        "damage": [600],
        "proration": 1,
        "scaleTable": scaleTableMedium
    },

    // Universal
    {
        "id": "superdash",
        "damage": [300],
        "proration": 2,
        "scaleTable": scaleTableLight
    },
];

var comboMoveIds = [];

var comboTableHeaderData = "<tr> <th>Number</th> <th>Proration</th> <th>Move</th> <th>Damage</th> <th>Scaling</th> <th>Combo_Dmg</th> </tr>";

var uniqueTableRowId = 0;

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
                currentScaling = calculateScaling(scaleTable, proration + 1);
            }

            let scaledDamage = currentHitDamage * currentScaling;
            scaledDamage = Math.trunc(scaledDamage);    // Turn the floating point into an int, kinda    TODO: Check if this rounding matches the game's rounding

            comboCurrentDamage += scaledDamage;

            let scalingPercentage = Math.trunc(currentScaling * 100) + "%"

            // Create and add new row
            let generatedDeleteButtonContent = "<input type='button' onclick='removeRowFromComboTable(this.parentNode.parentNode.children[0].innerHTML - 1);' value='X'>"
            let newRowContent = "<tr> <td style='font-weight: bold;'>" + (moveNumberInCombo + 1) + "</td> <td>" + (proration + 1) + "</td> <td>" + move.id + "</td> <td>" + scaledDamage + "</td> <td>" + scalingPercentage + "</td> <td>" + comboCurrentDamage + "</td> <td>" + generatedDeleteButtonContent + " </tr>"
            newTableDataContent += newRowContent;            
        });

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