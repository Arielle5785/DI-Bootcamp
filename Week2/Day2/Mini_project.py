class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, other_character):
        other_character.life -= self.attack


class Druid(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print(f'The mystical druid has appeared!')

    def meditate(self):  # meditate() - increases life by 10, decrease attack by 2
        self.life += 10
        self.attack -= 2

    def animal_help(self):  # animal_help() - increases attack by 5
        self.attack += 5

    # fight() - accepts another Character instance as a parameter and subtracts(0.75*life + 0.75*attack) from the other character’s life.

    def fight(self, other_character):
        damage = 0.75 * self.life + 0.75 * self.attack
        other_character.life -= damage


class Warrior(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print('The brave warrior enters the battle!')

    # brawl() - accepts another Character instance as a parameter, subtracts(2*attack) to the other characters life and adds(0.5*attack) to his own life.
    def brawl(self, other_character):
        other_character.life -= 2 * self.attack
        self.life += 0.5 * self.attack

    # train() - increases both your attack and life points by 2.

    def train(self):
        self.life += 2
        self.attack += 2

    # roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.

    def roar(self, other_character):
        other_character.attack -= 3


class Mage(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print('A powerful mage steps in the battle!')
  # curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.

    def curse():
        other_character.attack -= 2

    # summon() - increases attack attribute by 3 points.

    def summon(self):
        self.attack += 3

    # cast_spell() - accepts another Character instance as a parameter and subtracts attack/life to the other character’s life points(eg if your attack is 20 and life is 5 you will subtract 4 life points).

    def cast_spell(self, other_character):
        damage = self.attack / self.life
        other_character.life -= damage


druid = Druid("Yennefer of Vengerberg", life=30, attack=12)
warrior = Warrior("Ciri", life=40, attack=15)
mage = Mage("Geralt of Rivia", life=25, attack=20)

print("\n--- Druid Tests ---")
print(f"Initial life: {druid.life}, attack: {druid.attack}")
druid.meditate()
print(f"After meditate - life: {druid.life}, attack: {druid.attack}")
druid.animal_help()
print(f"After animal_help - attack: {druid.attack}")
druid.fight(warrior)
print(f"After fight - Warrior life: {warrior.life}")

print("\n--- Warrior Tests ---")
print(f"Initial life: {warrior.life}, attack: {warrior.attack}")
warrior.train()
print(f"After train - life: {warrior.life}, attack: {warrior.attack}")
warrior.roar(mage)
print(f"After roar - Mage attack: {mage.attack}")
warrior.brawl(druid)
print(f"After brawl - Druid life: {druid.life}, Warrior life: {warrior.life}")

print("\n--- Mage Tests ---")
print(f"Initial life: {mage.life}, attack: {mage.attack}")
mage.summon()
print(f"After summon - attack: {mage.attack}")
mage.curse(druid)
print(f"After curse - Druid attack: {druid.attack}")
mage.cast_spell(warrior)
print(f"After cast_spell - Warrior life: {warrior.life}")
