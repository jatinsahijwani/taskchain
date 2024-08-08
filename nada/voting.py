from nada_dsl import *
def total(xs: list[SecretInteger]) -> SecretInteger:
    return xs[0] + xs[1] + xs[2] + xs[3]
def nada_main():
    # Create the voter parties and the voting official party.
    voters = [Party("voter" + str(v)) for v in range(4)]
    official = Party(name="official")
    # Gather the inputs (one vote for each candidate from each voter).
    votes_per_candidate = [
        [
            SecretInteger(
                Input(
                    name="voter" + str(v) + "_candidate" + str(c),
                    party=Party("voter" + str(v))
                )
            )
            for v in range(4)
        ]
        for c in range(2)
    ]
    # Calculate and return the total for each candidate.
    return [
        Output(
            total(votes_per_candidate[c]) - Integer(4),
            "candidate" + str(c),
            official
        )
        for c in range(2)
    ]