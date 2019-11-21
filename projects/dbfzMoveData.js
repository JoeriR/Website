const defaultMoves = [
    // Ground normals
    {
        "id": "5L",
        "damage": [400],
        "proration": 1,
        "initialProration": 1,
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

    // Universal
    {
        "id": "superdash",
        "damage": [300],
        "proration": 1,
        "scaleTable": scaleTableLight
    },
    {
        "id": "vanish",
        "damage": [850],
        "proration": 5,
        "scaleTable": scaleTableLight
    },
    {
        "id": "sparking blast",
        "damage": [0],
        "proration": 1,
        "scaleTable": scaleTableLight   // TODO: verify
    },
    {
        "id": "sparking blast (whiff)",
        "damage": [0],
        "proration": 0,
        "scaleTable": null              // TODO: Fix other code so this becomes valid (let the next move decide the scaling table)
    },
    {
        "id": "sparking blast ends",
        "damage": [0],
        "proration": 0,
        "scaleTable": null              // TODO: Fix other code so this becomes valid (let the next move decide the scaling table)
    },
];



const gokuSsj = {
    "name": "Goku SSJ",
    "modifiedNormals": null,
    "uniqueNormals": [
        {
            "id": "2S",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableLight
        }, 
    ],
    "specials": [
        {
            "id": "236L",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "236M",
            "damage": [1300],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "236H",
            "damage": [1400],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "214L",
            "damage": [500, 500],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "214M",
            "damage": [350, 350, 350, 350],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "214H",
            "damage": [270, 270, 270, 270, 270, 270],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236L",
            "damage": [1000],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.236M",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.236H",
            "damage": [1300],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.214L",
            "damage": [470, 470],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.214M",
            "damage": [270, 270, 270, 270],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.214H",
            "damage": [240, 240, 240, 240, 240, 240],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236S",
            "damage": [262, 262, 262, 262, 262],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "236S (upwards)",
            "damage": [262, 262, 262, 262, 262],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S",
            "damage": [262, 262, 262, 262, 262],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (downwards)",
            "damage": [262, 262, 262, 262, 262],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
    ],
    "supers": [
        {
            "id": "236LM (forwards)",
            "minimumDamage": [770],
            "type": "DHC"
        },
        {
            "id": "j.236LM (downwards)",
            "minimumDamage": [750]
        },
        {
            "id": "236LM (upwards)",
            "minimumDamage": [810],
            "type": "DHC"
        },
        {
            "id": "236HS",
            "minimumDamage": [810]
        },
        {
            "id": "214LM",
            "minimumDamage": [1759],
            "type": "DHC"
        },
    ],
    "assist": {
        "id": "Goku SSJ assist",
        "damage": [800]  // TODO: Verify in-game
    }
};



const vegito = {
    "name": "Vegito",
    "modifiedNormals": [
        {
            "id": "5L",
            "damage": [130, 130, 130, 130],
            "proration": 1,
            "initialProration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "2L",
            "damage": [500],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "5S",
            "damage": [700],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
    ],
    "uniqueNormals": [
        {
            "id": "6S",
            "damage": [700],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
    ],
    "specials": [
        {
            "id": "236L",
            "damage": [130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236L (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236M",
            "damage": [130, 130, 130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236M (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236H",
            "damage": [130, 130, 130, 130, 130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "236H (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "214L",
            "damage": [1100],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "214M",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "214H",
            "damage": [1500],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.236L",
            "damage": [130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236L (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236M",
            "damage": [130, 130, 130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236M (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236H",
            "damage": [130, 130, 130, 130, 130, 130, 130, 600],
            "proration": 2,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.236H (2nd hit only)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "j.214L",
            "damage": [1100],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.214M",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.214H",
            "damage": [1500],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "236S (5 hits)",
            "damage": [1500],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "236S (4 hits)",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "236S (3 hits)",
            "damage": [900],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "236S (2 hits)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "236S (1 hits)",
            "damage": [300],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (5 hits)",
            "damage": [1500],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (4 hits)",
            "damage": [1200],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (3 hits)",
            "damage": [900],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (2 hits)",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.236S (1 hits)",
            "damage": [300],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
    ],
    "supers": [
        {
            "id": "236LM (5 hits)",
            "minimumDamage": [838],
            "type": "DHC"
        },
        {
            "id": "236LM (4 hits)",
            "minimumDamage": [778],
            "type": "DHC"
        },
        {
            "id": "236LM (3 hits)",
            "minimumDamage": [718],
            "type": "DHC"
        },
        {
            "id": "236LM (2 hits)",
            "minimumDamage": [658],
            "type": "DHC"
        },
        
        {
            "id": "j.236LM",
            "minimumDamage": [740]
        },
        {
            "id": "214LM",
            "minimumDamage": [1739],
            "type": "DHC"
        },
    ],
    "assist": {
        "id": "Vegito assist (5 hits)",
        "damage": [1000]  // TODO: Verify in-game
    }
};



const Trunks = {
    "name": "Trunks",
    "modifiedNormals": [
        {
            "id": "5S",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "j.5S",
            "damage": [600],
            "proration": 1,
            "scaleTable": scaleTableLight
        }
    ],
    "uniqueNormals": null,
    "specials": [
        {
            "id": "236L",
            "damage": [400, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "236M",
            "damage": [400, 50, 50, 50, 50, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "236H",
            "damage": [600, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "214L",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "214M",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "214H",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "j.236L",
            "damage": [300, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.236M",
            "damage": [300, 50, 50, 50, 50, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.236H",
            "damage": [300, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 800],
            "proration": 1,
            "scaleTable": scaleTableOverhead
        },
        {
            "id": "j.214L",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "j.214M",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "j.214H",
            "damage": [0],
            "proration": 0,
            "scaleTable": null  // This is a movement only attack
        },
        {
            "id": "236S",
            "damage": [262, 262, 262, 262, 262],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
        {
            "id": "214S (close hit)",
            "damage": [900],
            "proration": 1,
            "scaleTable": scaleTableMedium
        },
        {
            "id": "214S (far away hit)",
            "damage": [900],
            "proration": 1,
            "scaleTable": scaleTableLight
        },
    ],
    "supers": [
        {
            "id": "236LM",
            "minimumDamage": [814],
            "type": "DHC"
        },
        {
            "id": "214LM",
            "minimumDamage": [1715],
            "type": "DHC"
        },
    ],
    "assist": {
        "id": "Trunks assist",
        "damage": [800]  // TODO: Verify in-game
    }
};
