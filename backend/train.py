# train_model.py
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report
import joblib

# Load CSV
df = pd.read_csv('D:\pro\backend\pregnancy_synthetic_10000.csv')

# Encode categorical columns
le_test = LabelEncoder()
df['Test_Name_Enc'] = le_test.fit_transform(df['Test_Name'])

le_interpretation = LabelEncoder()
df['Interpretation_Enc'] = le_interpretation.fit_transform(df['Interpretation'])

# Features & target
X = df[['Month', 'Test_Name_Enc', 'Result']].copy()
y = df['Interpretation_Enc']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train XGBoost classifier
model = xgb.XGBClassifier(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=5,
    eval_metric='mlogloss',
    use_label_encoder=False,
)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred, target_names=le_interpretation.classes_))

# Save model and encoders
model.save_model('pregnancy_xgb_model.json')
joblib.dump(le_test, 'labelencoder_test.pkl')
joblib.dump(le_interpretation, 'labelencoder_interpretation.pkl')

print("✅ Model and encoders saved!")
