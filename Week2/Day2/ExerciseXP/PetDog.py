from ExercisesXP_Day2_1 import Dog
import random


class PetDog(Dog):
    def __init__(self, trained=False):
        self.trained = trained
        super().__init__(dog_name, age, weight, other_dog)

    def train(self):
        print(self.bark())
        self.trained = True
        return self

    def play(self, *args):
        dogs_names = [dog.dog_name for dog in dogs]
        print(f'{', '.join(dogs_names)} all play together.')

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f'{dog_name} does a barrel roll.', f'{dog_name} stands on his back legs.', f'{dog_name} shakes your hand.', f'{dog_name} plays dead.']
            print(random.choice(tricks))


dog1 = Dog('Fluffy', 5, 15)
dog2 = Dog('Rex', 4, 12)
dog3 = Dog('Carlin', 6, 11)
pet_dog = PetDog('Pouf', 1, 6)

pet_dog.train()
pet_dog.play(dog1, dog2, dog3)
pet_dog.do_a_trick()
