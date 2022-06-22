# Solana Compliance Software

Directory for Solana token compliance automation.
The software provides a mechanism for statistically evaluating the likelihood a particular asset would be deemed a security.

[v1 YouTube Demo](https://www.youtube.com/watch?v=cKHA-2AkGVs)

[Web App YouTube Demo](https://www.youtube.com/watch?v=qexNNDlzO7Q)

# Overview

Given the inherent seperation of syntax and semantics, complying with securities laws is a probabilistic risk assessment for non-security tokens.
The goal for this software is to help non-security tokens reduce that risk by optimizing their asset compliance statistically.
Some people say that it's difficult to put a clear regulatory framework in place for cryptocurrency, so the lines are gray for which assets are securities.
The truth is, it is actually very easy to define a clear line. For example, only assets which represent an equity interest in a company are securities.

# Problem

However, regulators nor legislators have any incentive to create clear rules or guidance for innovative or decentralized markets. As a result, asset creators are in a difficult position, where there are only two ways they can follow the law. The first is to spend a lot of time and capital up front to create a security token and register the asset with the SEC. This first option simply isn't possible for most new projects that lack the capital to hire legal counsel and pay the SEC, as well as the time to wait for the SEC to register an asset. The second way to follow the law is to engineer assets which are not securities and therefore not within the SEC's jurisdiction. This option comes with drawbacks financially for new projects, however this is the only option in many circumstances due to the extremely high cost of registration for small businesses and the nature of decentralized digital assets and applications. Still, for many, there is a lack of clarity in defining or understanding which digital assets are securities and which digital assets are not securities. 

# Solution

Choice Coin invented a Compliance AI for automating securities compliance. The Compliance AI is an embedded system which formalizes human knowledge using natural language processing to statistically measure the probability that a particular asset is a security. The goal for this software is to help asset creators that do not wish create security tokens, engineer their assets to reduce regulatory risk and comply with the law.

# Analytical Framework

Whether an asset is a security or non-security asset depends on various actors analyzing certain attributes associated with the asset. This software defines the analysis using various defined variables, which may be weighted and processed for producing probabilistic measurements. The probabilistic measurements correspond with a number between 0 and 1, where an asset with a score of 1 is statistically unlikely to be a security and an asset with a score of 0 is likely to be a security.

