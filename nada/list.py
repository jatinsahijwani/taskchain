from nada_dsl import *
def nada_main():
    data_owner = Party(name="data_owner")
    start = SecretInteger(Input(name="start", party=data_owner))
    sequence = [start + Integer(i) for i in range(3)]
    return [
        Output(sequence[i], "sequence_" + str(i), data_owner)
        for i in range(3)
    ]