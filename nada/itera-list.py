 		from nada_dsl import *
def total(xs: list[SecretInteger]) -> SecretInteger:
    return xs[0] + xs[1] + xs[2] + xs[3]
def nada_main():
    # Create the voter parties and the voting official party.
    voters: list[Party] = []
    for v in range(4):
        voters.append(Party("voter" + str(v)))
    official = Party(name="official")
    # Gather the inputs (one vote for each candidate from each voter).
    votes_per_candidate: list[list[SecretInteger]] = []
    for c in range(2):
        votes_per_candidate.append([])
        for v in range(4):
            votes_per_candidate[c].append(SecretInteger(
                Input(
                    name="voter" + str(v) + "_candidate" + str(c),
                    party=Party("voter" + str(v))
                )
            ))
    # Calculate and return the total for each candidate.
    # Calculate the total for each candidate.
    outputs: list[Output] = []
    for c in range(2):
        outputs.append(
            Output(
                total(votes_per_candidate[c]) - Integer(4),
                "candidate" + str(c),
                official
            )
        )
    return outputs