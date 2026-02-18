import xgboost as xgb
import numpy as np
import joblib

# Load model and encoders
model = xgb.XGBClassifier()
model.load_model('pregnancy_xgb_model.json')
le_test = joblib.load('labelencoder_test.pkl')
le_interpretation = joblib.load('labelencoder_interpretation.pkl')

# Example input
month = 3
test_name = 'Hemoglobin'
result = 10.5

test_enc = le_test.transform([test_name])[0]
X_input = np.array([[month, test_enc, result]])

pred = model.predict(X_input)
interpretation = le_interpretation.inverse_transform(pred)[0]

print("Prediction:", interpretation)
