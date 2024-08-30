import g4f
from g4f.Provider import IterProvider, ProviderType
for model in g4f.models._all_models:
    print(model)
    print(g4f.models.ModelUtils.convert[model].best_provider.get_dict[0])