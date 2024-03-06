export default [
    {
        id: 1,
        name: "John Doe",
        networth: "$50,000,000",
        latlong: [144.946457, -37.840935],
        residencies: [
            {
                name: "Domicile",
                description: "California, USA",
                latlong: [-124.5924009,37.15157],
            },
            {
                name: "Residence",
                description: "British Virgin Islands, UK",
                latlong: [-64.8682882,18.550877],
            },
            {
                name: "Citizenship",
                description: "BVI, Malta, United States of America",
                latlong: [-73.8041278,42.9843817],
            },
        ],
        revenue_generators: [
            {
                name: "Advisory Firm, LLC",
                location: "Delaware, United States of America - Chairman",
                latlong: [34.0895221,-84.2733485],
            },
            {
                name: "Private Jet Company Inc.",
                latlong: [33.9744003,-83.9679207],
            },
            {
                name: "Financial Marketing Firm",
                latlong: [34.0173108,-84.0782773],
            },
        ],
        business_locations: [
            {
                name: "Advisory Firm, LLC",
                location: "Delaware, United States of America - Chairman",
                latlong: [-76.0459692,39.1434664],
            },
            {
                name: "Dubai, UAE - Manager",
                location: "Private Jet Company Inc.",
                latlong: [54.603616,25.0747186],
            },
            {
                name: "Financial Marketing Firm",
                location: "Labuan, Malaysia- CEO",
                latlong: [115.1408031,5.3027478],
            },
        ],
        corporate_structures: {
            chart_img: "https://www.onboardmeetings.com/wp-content/uploads/2022/04/Org-Stucture-Blog-Header-1200-x-1000-1024x853.png",
            details: [
                {
                name: "Location - Labuan, Malaysia",
                a: []
                },
                {
                    name: "Laws",
                    a: [
                        `LABUAN BUSINESS ACTIVITY TAX ACT 1990Section 9 Subsection 1
                        “Notwithstanding section 3, the profits of a Labuan entity carrying on a Labuan business activity which is a Labuan non-trading activity for the basis period for a year of assessment shall not be charged to tax under this Act for that year of assessment.” `,
                        ``
                    ]
                },
                {
                    name: "Facts",
                    a: [
                        `Labuan companies can be established with 100% foreign capital only. Labuan also implements a 3% corporate tax rate on trading companies and 0% tax on holding companies. Labuan Business Activity Tax (LBAT) applies to corporations, including offshore companies and asset protection trusts, under the LBAT Act 1990. They can choose between a 3% tax on net profits for trading activities or a fixed amount for investments. Entities can benefit from exemptions from withholding tax, stamp duty, and GST.`
                    ]
                },
            ]
        },
        others: {
            trusts: [
                {
                    name: "Location - Cook Islands",
                    a: []
                },
                {
                    name: "Trust Law",
                    a: [
                        `International Trusts Act: Section 13K establishes that the High Court of the Cook Islands is the only place where an action or proceeding to annul an international trust settlement, disposition, or relief under Section 13B can be initiated.`,
                        `According to Section 13 B of the International Trusts Act, a Cook Islands International Trust, or any settlement thereon, shall not be fraudulent against a creditor of the Settlor if the settlement occurs either before the creditor's cause of action arose or more than two years after it arose, in accordance with the Cook Islands International Trusts Act. However, if the cause of action arises within two years after the settlement, the creditor must file a lawsuit in a court having jurisdiction over the matter no later than one year after the settlement.`
                    ]
                },
                {
                    name: "Facts",
                    a: [
                        `The Cook Islands were the first nation to combine strong asset protection regulations into trust legislation when they changed the International Trusts Act in 1989. This allowed the Settlor to remain the beneficiary while still receiving asset protection. This prompted similar legislation in Belize and Nevis.`,
                        `The International Trusts Act of 1984 places creditors in a position where they face high barriers when attempting to access trust assets due to strict statutes of limitations, high burden of proof, and lack of recognition of foreign judgments.`
                    ]
                },
            ],
            laws: [
                {
                    name: 'Cook Islands Asset Protection Trust Law',
                    latlong: [-21.2056998,-159.801423]
                },
                {
                    name: 'Cook Islands International Trusts Act 1984',
                    latlong: [-21.2056998,-159.801423]
                }
            ],
            rev_laws: [
                {
                    name: "Relevant Case Law",
                    description: `The Trust is structured in such a way where the settlor has no control over his/her assets. This is to achieve complete asset protection: by giving up full control over to the trustee in a different jurisdiction, when sued, the settlor has no power to repatriate the assets, thus the creditor has no claim.`,
                    a: [
                        `Chadwick v. Janecka - took asset protection in his own hands by transferring money into bank accounts under his name, which also showed his control over the funds.`,
                        `In re Rensin - illustrates the outcome of a properly setup asset protection like making it difficult for creditors to go after your assets. It also shows the benefit of giving up control over your assets where the court cannot force you to turn over your assets or change the terms of the trust.`
                    ]
                }
            ],
            banks: [
                {
                    name: "Location - Pigute Galland Bank Switzerland",
                    latlong: [46.6434067,5.8878399]
                },
                {
                    name: "Investment - Charities, individual stocks, corporate bond funds",
                    latlong: [46.6434067,5.8878399]
                }
            ]
        }
    },
    // {
    //     id: 2,
    //     name: "Patrick Dela Cruz",
    //     networth: "$10,000,000",
    //     latlong: [37.15157,-124.5924009],
    //     residencies: [
    //         {
    //             name: "Domicile",
    //             description: "California, USA",
    //             latlong: [37.15157,-124.5924009],
    //         },
    //         {
    //             name: "Residence",
    //             description: "British Virgin Islands, UK",
    //             latlong: [18.550877,-64.8682882],
    //         },
    //         {
    //             name: "Citizenship",
    //             description: "BVI, Malta, United States of America",
    //             latlong: [42.9843817,-73.8041278],
    //         },
    //     ],
    //     revenue_generators: [
    //         {
    //             name: "Advisory Firm, LLC",
    //             latlong: [34.0895221,-84.2733485],
    //         },
    //         {
    //             name: "Private Jet Company Inc.",
    //             latlong: [33.9744003,-83.9679207],
    //         },
    //         {
    //             name: "Financial Marketing Firm",
    //             latlong: [34.0173108,-84.0782773],
    //         },
    //     ],
    //     business_locations: [
    //         {
    //             name: "Delaware, United States of America - Chairman",
    //             latlong: [39.1434664,-76.0459692],
    //         },
    //         {
    //             name: "Dubai, UAE - Manager",
    //             latlong: [25.0747186,54.603616],
    //         },
    //         {
    //             name: "Labuan, Malaysia- CEO",
    //             latlong: [5.3027478,115.1408031],
    //         },
    //     ],
    //     corporate_structures: [
    //         {
    //             name: "Location - Labuan, Malaysia",
    //             a: []
    //         },
    //         {
    //             name: "Laws",
    //             a: [
    //                 `LABUAN BUSINESS ACTIVITY TAX ACT 1990Section 9 Subsection 1
    //                 “Notwithstanding section 3, the profits of a Labuan entity carrying on a Labuan business activity which is a Labuan non-trading activity for the basis period for a year of assessment shall not be charged to tax under this Act for that year of assessment.” `,
    //                 ``
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `Labuan companies can be established with 100% foreign capital only. Labuan also implements a 3% corporate tax rate on trading companies and 0% tax on holding companies. Labuan Business Activity Tax (LBAT) applies to corporations, including offshore companies and asset protection trusts, under the LBAT Act 1990. They can choose between a 3% tax on net profits for trading activities or a fixed amount for investments. Entities can benefit from exemptions from withholding tax, stamp duty, and GST.`
    //             ]
    //         },
    //     ],
    //     trusts: [
    //         {
    //             name: "Location - Cook Islands",
    //             a: []
    //         },
    //         {
    //             name: "Trust Law",
    //             a: [
    //                 `International Trusts Act: Section 13K establishes that the High Court of the Cook Islands is the only place where an action or proceeding to annul an international trust settlement, disposition, or relief under Section 13B can be initiated.`,
    //                 `According to Section 13 B of the International Trusts Act, a Cook Islands International Trust, or any settlement thereon, shall not be fraudulent against a creditor of the Settlor if the settlement occurs either before the creditor's cause of action arose or more than two years after it arose, in accordance with the Cook Islands International Trusts Act. However, if the cause of action arises within two years after the settlement, the creditor must file a lawsuit in a court having jurisdiction over the matter no later than one year after the settlement.`
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `The Cook Islands were the first nation to combine strong asset protection regulations into trust legislation when they changed the International Trusts Act in 1989. This allowed the Settlor to remain the beneficiary while still receiving asset protection. This prompted similar legislation in Belize and Nevis.`,
    //                 `The International Trusts Act of 1984 places creditors in a position where they face high barriers when attempting to access trust assets due to strict statutes of limitations, high burden of proof, and lack of recognition of foreign judgments.`
    //             ]
    //         },
    //     ],
    //     laws: [
    //         {
    //             name: 'Cook Islands Asset Protection Trust Law',
    //             latlong: [-21.2056998,-159.801423]
    //         },
    //         {
    //             name: 'Cook Islands International Trusts Act 1984',
    //             latlong: [-21.2056998,-159.801423]
    //         }
    //     ],
    //     rev_laws: [
    //         {
    //             name: "Relevant Case Law",
    //             description: `The Trust is structured in such a way where the settlor has no control over his/her assets. This is to achieve complete asset protection: by giving up full control over to the trustee in a different jurisdiction, when sued, the settlor has no power to repatriate the assets, thus the creditor has no claim.`,
    //             a: [
    //                 `Chadwick v. Janecka - took asset protection in his own hands by transferring money into bank accounts under his name, which also showed his control over the funds.`,
    //                 `In re Rensin - illustrates the outcome of a properly setup asset protection like making it difficult for creditors to go after your assets. It also shows the benefit of giving up control over your assets where the court cannot force you to turn over your assets or change the terms of the trust.`
    //             ]
    //         }
    //     ],
    //     banks: [
    //         {
    //             name: "Location - Pigute Galland Bank Switzerland",
    //             latlong: [46.6434067,5.8878399]
    //         },
    //         {
    //             name: "Investment - Charities, individual stocks, corporate bond funds",
    //             latlong: [46.6434067,5.8878399]
    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     name: "Jason Dela Cruz",
    //     networth: "$5,000,000",
    //     latlong: [37.15157,-124.5924009],
    //     residencies: [
    //         {
    //             name: "Domicile",
    //             description: "California, USA",
    //             latlong: [37.15157,-124.5924009],
    //         },
    //         {
    //             name: "Residence",
    //             description: "British Virgin Islands, UK",
    //             latlong: [18.550877,-64.8682882],
    //         },
    //         {
    //             name: "Citizenship",
    //             description: "BVI, Malta, United States of America",
    //             latlong: [42.9843817,-73.8041278],
    //         },
    //     ],
    //     revenue_generators: [
    //         {
    //             name: "Advisory Firm, LLC",
    //             latlong: [34.0895221,-84.2733485],
    //         },
    //         {
    //             name: "Private Jet Company Inc.",
    //             latlong: [33.9744003,-83.9679207],
    //         },
    //         {
    //             name: "Financial Marketing Firm",
    //             latlong: [34.0173108,-84.0782773],
    //         },
    //     ],
    //     business_locations: [
    //         {
    //             name: "Delaware, United States of America - Chairman",
    //             latlong: [39.1434664,-76.0459692],
    //         },
    //         {
    //             name: "Dubai, UAE - Manager",
    //             latlong: [25.0747186,54.603616],
    //         },
    //         {
    //             name: "Labuan, Malaysia- CEO",
    //             latlong: [5.3027478,115.1408031],
    //         },
    //     ],
    //     corporate_structures: [
    //         {
    //             name: "Location - Labuan, Malaysia",
    //             a: []
    //         },
    //         {
    //             name: "Laws",
    //             a: [
    //                 `LABUAN BUSINESS ACTIVITY TAX ACT 1990Section 9 Subsection 1
    //                 “Notwithstanding section 3, the profits of a Labuan entity carrying on a Labuan business activity which is a Labuan non-trading activity for the basis period for a year of assessment shall not be charged to tax under this Act for that year of assessment.” `,
    //                 ``
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `Labuan companies can be established with 100% foreign capital only. Labuan also implements a 3% corporate tax rate on trading companies and 0% tax on holding companies. Labuan Business Activity Tax (LBAT) applies to corporations, including offshore companies and asset protection trusts, under the LBAT Act 1990. They can choose between a 3% tax on net profits for trading activities or a fixed amount for investments. Entities can benefit from exemptions from withholding tax, stamp duty, and GST.`
    //             ]
    //         },
    //     ],
    //     trusts: [
    //         {
    //             name: "Location - Cook Islands",
    //             a: []
    //         },
    //         {
    //             name: "Trust Law",
    //             a: [
    //                 `International Trusts Act: Section 13K establishes that the High Court of the Cook Islands is the only place where an action or proceeding to annul an international trust settlement, disposition, or relief under Section 13B can be initiated.`,
    //                 `According to Section 13 B of the International Trusts Act, a Cook Islands International Trust, or any settlement thereon, shall not be fraudulent against a creditor of the Settlor if the settlement occurs either before the creditor's cause of action arose or more than two years after it arose, in accordance with the Cook Islands International Trusts Act. However, if the cause of action arises within two years after the settlement, the creditor must file a lawsuit in a court having jurisdiction over the matter no later than one year after the settlement.`
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `The Cook Islands were the first nation to combine strong asset protection regulations into trust legislation when they changed the International Trusts Act in 1989. This allowed the Settlor to remain the beneficiary while still receiving asset protection. This prompted similar legislation in Belize and Nevis.`,
    //                 `The International Trusts Act of 1984 places creditors in a position where they face high barriers when attempting to access trust assets due to strict statutes of limitations, high burden of proof, and lack of recognition of foreign judgments.`
    //             ]
    //         },
    //     ],
    //     laws: [
    //         {
    //             name: 'Cook Islands Asset Protection Trust Law',
    //             latlong: [-21.2056998,-159.801423]
    //         },
    //         {
    //             name: 'Cook Islands International Trusts Act 1984',
    //             latlong: [-21.2056998,-159.801423]
    //         }
    //     ],
    //     rev_laws: [
    //         {
    //             name: "Relevant Case Law",
    //             description: `The Trust is structured in such a way where the settlor has no control over his/her assets. This is to achieve complete asset protection: by giving up full control over to the trustee in a different jurisdiction, when sued, the settlor has no power to repatriate the assets, thus the creditor has no claim.`,
    //             a: [
    //                 `Chadwick v. Janecka - took asset protection in his own hands by transferring money into bank accounts under his name, which also showed his control over the funds.`,
    //                 `In re Rensin - illustrates the outcome of a properly setup asset protection like making it difficult for creditors to go after your assets. It also shows the benefit of giving up control over your assets where the court cannot force you to turn over your assets or change the terms of the trust.`
    //             ]
    //         }
    //     ],
    //     banks: [
    //         {
    //             name: "Location - Pigute Galland Bank Switzerland",
    //             latlong: [46.6434067,5.8878399]
    //         },
    //         {
    //             name: "Investment - Charities, individual stocks, corporate bond funds",
    //             latlong: [46.6434067,5.8878399]
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     name: "Gabby Dela Cruz",
    //     networth: "$1,000,000",
    //     latlong: [37.15157,-124.5924009],
    //     residencies: [
    //         {
    //             name: "Domicile",
    //             description: "California, USA",
    //             latlong: [37.15157,-124.5924009],
    //         },
    //         {
    //             name: "Residence",
    //             description: "British Virgin Islands, UK",
    //             latlong: [18.550877,-64.8682882],
    //         },
    //         {
    //             name: "Citizenship",
    //             description: "BVI, Malta, United States of America",
    //             latlong: [42.9843817,-73.8041278],
    //         },
    //     ],
    //     revenue_generators: [
    //         {
    //             name: "Advisory Firm, LLC",
    //             latlong: [34.0895221,-84.2733485],
    //         },
    //         {
    //             name: "Private Jet Company Inc.",
    //             latlong: [33.9744003,-83.9679207],
    //         },
    //         {
    //             name: "Financial Marketing Firm",
    //             latlong: [34.0173108,-84.0782773],
    //         },
    //     ],
    //     business_locations: [
    //         {
    //             name: "Delaware, United States of America - Chairman",
    //             latlong: [39.1434664,-76.0459692],
    //         },
    //         {
    //             name: "Dubai, UAE - Manager",
    //             latlong: [25.0747186,54.603616],
    //         },
    //         {
    //             name: "Labuan, Malaysia- CEO",
    //             latlong: [5.3027478,115.1408031],
    //         },
    //     ],
    //     corporate_structures: [
    //         {
    //             name: "Location - Labuan, Malaysia",
    //             a: []
    //         },
    //         {
    //             name: "Laws",
    //             a: [
    //                 `LABUAN BUSINESS ACTIVITY TAX ACT 1990Section 9 Subsection 1
    //                 “Notwithstanding section 3, the profits of a Labuan entity carrying on a Labuan business activity which is a Labuan non-trading activity for the basis period for a year of assessment shall not be charged to tax under this Act for that year of assessment.” `,
    //                 ``
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `Labuan companies can be established with 100% foreign capital only. Labuan also implements a 3% corporate tax rate on trading companies and 0% tax on holding companies. Labuan Business Activity Tax (LBAT) applies to corporations, including offshore companies and asset protection trusts, under the LBAT Act 1990. They can choose between a 3% tax on net profits for trading activities or a fixed amount for investments. Entities can benefit from exemptions from withholding tax, stamp duty, and GST.`
    //             ]
    //         },
    //     ],
    //     trusts: [
    //         {
    //             name: "Location - Cook Islands",
    //             a: []
    //         },
    //         {
    //             name: "Trust Law",
    //             a: [
    //                 `International Trusts Act: Section 13K establishes that the High Court of the Cook Islands is the only place where an action or proceeding to annul an international trust settlement, disposition, or relief under Section 13B can be initiated.`,
    //                 `According to Section 13 B of the International Trusts Act, a Cook Islands International Trust, or any settlement thereon, shall not be fraudulent against a creditor of the Settlor if the settlement occurs either before the creditor's cause of action arose or more than two years after it arose, in accordance with the Cook Islands International Trusts Act. However, if the cause of action arises within two years after the settlement, the creditor must file a lawsuit in a court having jurisdiction over the matter no later than one year after the settlement.`
    //             ]
    //         },
    //         {
    //             name: "Facts",
    //             a: [
    //                 `The Cook Islands were the first nation to combine strong asset protection regulations into trust legislation when they changed the International Trusts Act in 1989. This allowed the Settlor to remain the beneficiary while still receiving asset protection. This prompted similar legislation in Belize and Nevis.`,
    //                 `The International Trusts Act of 1984 places creditors in a position where they face high barriers when attempting to access trust assets due to strict statutes of limitations, high burden of proof, and lack of recognition of foreign judgments.`
    //             ]
    //         },
    //     ],
    //     laws: [
    //         {
    //             name: 'Cook Islands Asset Protection Trust Law',
    //             latlong: [-21.2056998,-159.801423]
    //         },
    //         {
    //             name: 'Cook Islands International Trusts Act 1984',
    //             latlong: [-21.2056998,-159.801423]
    //         }
    //     ],
    //     rev_laws: [
    //         {
    //             name: "Relevant Case Law",
    //             description: `The Trust is structured in such a way where the settlor has no control over his/her assets. This is to achieve complete asset protection: by giving up full control over to the trustee in a different jurisdiction, when sued, the settlor has no power to repatriate the assets, thus the creditor has no claim.`,
    //             a: [
    //                 `Chadwick v. Janecka - took asset protection in his own hands by transferring money into bank accounts under his name, which also showed his control over the funds.`,
    //                 `In re Rensin - illustrates the outcome of a properly setup asset protection like making it difficult for creditors to go after your assets. It also shows the benefit of giving up control over your assets where the court cannot force you to turn over your assets or change the terms of the trust.`
    //             ]
    //         }
    //     ],
    //     banks: [
    //         {
    //             name: "Location - Pigute Galland Bank Switzerland",
    //             latlong: [46.6434067,5.8878399]
    //         },
    //         {
    //             name: "Investment - Charities, individual stocks, corporate bond funds",
    //             latlong: [46.6434067,5.8878399]
    //         }
    //     ]
    // },
]