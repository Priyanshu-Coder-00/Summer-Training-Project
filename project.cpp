#include <iostream>
#include <stack>
#include <string>
#include <fstream>
#include <sstream>
#include <algorithm> // For std::count
using namespace std;

class VersionedDocument {
private:
    string currentContent;
    stack<string> undoStack;
    stack<string> redoStack;

public:
    void insertText(const string& newText) {
        undoStack.push(currentContent);
        while (!redoStack.empty()) redoStack.pop();
        currentContent += newText + "\n";
        cout << "\u2705 Text inserted.\n";
    }

    void deleteLastLine() {
        if (currentContent.empty()) {
            cout << "\u26A0\uFE0F Document is already empty.\n";
            return;
        }
        undoStack.push(currentContent);
        while (!redoStack.empty()) redoStack.pop();

        size_t lastNewLine = currentContent.find_last_of('\n');
        if (lastNewLine != string::npos) {
            size_t secondLastNewLine = currentContent.find_last_of('\n', lastNewLine - 1);
            if (secondLastNewLine != string::npos)
                currentContent = currentContent.substr(0, secondLastNewLine + 1);
            else
                currentContent = "";
            cout << "\u2705 Last line deleted.\n";
        }
    }

    void undo() {
        if (!undoStack.empty()) {
            redoStack.push(currentContent);
            currentContent = undoStack.top();
            undoStack.pop();
            cout << "\u21A9\uFE0F Undo successful.\n";
        } else {
            cout << "\u26A0\uFE0F Nothing to undo.\n";
        }
    }

    void redo() {
        if (!redoStack.empty()) {
            undoStack.push(currentContent);
            currentContent = redoStack.top();
            redoStack.pop();
            cout << "\u21AA\uFE0F Redo successful.\n";
        } else {
            cout << "\u26A0\uFE0F Nothing to redo.\n";
        }
    }

    void display() {
        cout << "\n\U0001F4C4 --- Current Document ---\n";
        cout << (currentContent.empty() ? "[Empty Document]\n" : currentContent);
        cout << "--------------------------\n";
        cout << "\U0001F4CC Total Lines: " << countLines() << "\n";
    }

    void clear() {
        undoStack.push(currentContent);
        while (!redoStack.empty()) redoStack.pop();
        currentContent.clear();
        cout << "\U0001F9F9 Document cleared.\n";
    }

    void saveToFile(const string& filename) {
        ofstream outFile(filename);
        if (outFile.is_open()) {
            outFile << currentContent;
            outFile.close();
            cout << "\U0001F4BE Document saved to " << filename << "\n";
        } else {
            cout << "\u274C Failed to open file.\n";
        }
    }

    void loadFromFile(const string& filename) {
        ifstream inFile(filename);
        if (inFile.is_open()) {
            undoStack.push(currentContent);
            while (!redoStack.empty()) redoStack.pop();

            stringstream buffer;
            buffer << inFile.rdbuf();
            currentContent = buffer.str();
            inFile.close();
            cout << "\U0001F4C2 Document loaded from " << filename << "\n";
        } else {
            cout << "\u274C File not found.\n";
        }
    }

    int countLines() {
        if (currentContent.empty()) return 0;
        return count(currentContent.begin(), currentContent.end(), '\n');
    }
};

void showMenu() {
    cout << "\n=============================\n";
    cout << "\U0001F4D8 Versioned Document Tracker\n";
    cout << "=============================\n";
    cout << "1. Insert Text\n";
    cout << "2. Delete Last Line\n";
    cout << "3. Undo\n";
    cout << "4. Redo\n";
    cout << "5. Display Document\n";
    cout << "6. Clear Document\n";
    cout << "7. Save to File\n";
    cout << "8. Load from File\n";
    cout << "9. Exit\n";
    cout << "-----------------------------\n";
    cout << "Enter your choice: ";
}

int main() {
    VersionedDocument doc;
    int choice;
    string text, filename;

    while (true) {
        showMenu();
        cin >> choice;
         if (cin.fail()){
            cin.clear(); // clear error flag
            cin.ignore(numeric_limits<streamsize>::max(), '\n'); // discard invalid input
            cout << "\u274C Invalid input. Please enter a number between 1 and 9.\n";
            continue;
        }

        cin.ignore();
        switch (choice) {
            case 1:
                cout << "Enter text: ";
                getline(cin, text);
                doc.insertText(text);
                break;
            case 2:
                doc.deleteLastLine();
                break;
            case 3:
                doc.undo();
                break;
            case 4:
                doc.redo();
                break;
            case 5:
                doc.display();
                break;
            case 6:
                doc.clear();
                break;
            case 7:
                cout << "Enter filename to save: ";
                getline(cin, filename);
                doc.saveToFile(filename);
                break;
            case 8:
                cout << "Enter filename to load: ";
                getline(cin, filename);
                doc.loadFromFile(filename);
                break;
            case 9:
                cout << "\U0001F44B Exiting program...\n";
                return 0;
            default:
                cout << "\u2757 Invalid choice. Try again.\n";
        }
    }
}
