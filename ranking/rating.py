from trueskill import TrueSkill, Rating, rate_1vs1


MU = 25.  # Default initial mean of ratings.
SIGMA = MU / 3  # Default initial standard deviation of ratings.
BETA = SIGMA / 2  # Default distance that guarantees about 76% chance of winning.
TAU = SIGMA / 100  # Default dynamic factor.
DRAW_PROBABILITY = 0  # Default draw probability of the game.

# Create environment
env = TrueSkill(mu=MU, sigma=SIGMA, beta=BETA, tau=TAU, draw_probability=DRAW_PROBABILITY, backend=None)
env.make_as_global()


def init_rating():
    return MU, SIGMA


def update_rating(mu1, sigma1, score1, mu2, sigma2, score2):

    # Reconstruct Rating object
    r1 = Rating(mu1, sigma1)
    r2 = Rating(mu2, sigma2)

    # Update the Rating depending on who wins
    if score1 > score2:
        new_r1, new_r2 = rate_1vs1(r1, r2)
    elif score2 > score1:
        new_r2, new_r1 = rate_1vs1(r2, r1)
    else:
        raise ValueError("Game score cannot be a draw")

    # Return the deconstructed Rating object
    return new_r1.mu, new_r1.sigma, new_r2.mu, new_r2.sigma
