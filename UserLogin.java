package Mainpackage;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.util.HashMap;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
public class UserLogin
{
    private JFrame frame;
    private JTextField usernameField;
    private JPasswordField passwordField;
    private JComboBox<String> modeSelector;
    private HashMap<String, String> userDatabase = new HashMap<>();
    public static void main(String[] args)
    {
        EventQueue.invokeLater(() -> 
        {
            try 
            {
                UserLogin window = new UserLogin();
                window.frame.setVisible(true);
            } 
            catch (Exception e) 
            {
                e.printStackTrace();
            }
        });
    }
    public UserLogin() 
    {
        initialize();
    }
    private void initialize() 
    {
        frame = new JFrame();
        frame.getContentPane().setBackground(Color.CYAN);
        frame.setBounds(100, 100, 450, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setLayout(null);
        JLabel lblTitle = new JLabel("Login Portal");
        lblTitle.setFont(new Font("Serif", Font.BOLD, 24));
        lblTitle.setBounds(150, 10, 150, 30);
        frame.getContentPane().add(lblTitle);
        JLabel lblUsername = new JLabel("Username:");
        lblUsername.setFont(new Font("SansSerif", Font.PLAIN, 16));
        lblUsername.setBounds(50, 70, 100, 25);
        frame.getContentPane().add(lblUsername);
        usernameField = new JTextField();
        usernameField.setBounds(150, 70, 200, 25);
        frame.getContentPane().add(usernameField);
        usernameField.setColumns(10);
        JLabel lblPassword = new JLabel("Password:");
        lblPassword.setFont(new Font("SansSerif", Font.PLAIN, 16));
        lblPassword.setBounds(50, 120, 100, 25);
        frame.getContentPane().add(lblPassword);
        passwordField = new JPasswordField();
        passwordField.setBounds(150, 120, 200, 25);
        frame.getContentPane().add(passwordField);
        JLabel lblMode = new JLabel("Mode:");
        lblMode.setFont(new Font("SansSerif", Font.PLAIN, 16));
        lblMode.setBounds(50, 170, 100, 25);
        frame.getContentPane().add(lblMode);
        modeSelector = new JComboBox<>(new String[] { "User Mode", "Vendor Mode" });
        modeSelector.setBounds(150, 170, 200, 25);
        frame.getContentPane().add(modeSelector);
        JButton btnLogin = new JButton("Login");
        btnLogin.setFont(new Font("SansSerif", Font.BOLD, 16));
        btnLogin.setBounds(150, 220, 100, 30);
        frame.getContentPane().add(btnLogin);
        btnLogin.addActionListener(e -> performLogin());
        JButton btnCreateAccount = new JButton("Create Account");
        btnCreateAccount.setFont(new Font("SansSerif", Font.BOLD, 16));
        btnCreateAccount.setBounds(150, 270, 150, 30);
        frame.getContentPane().add(btnCreateAccount);
        btnCreateAccount.addActionListener(e -> createAccount());
    }
    private void createAccount() 
    {
        String username = usernameField.getText();
        String password = String.valueOf(passwordField.getPassword());
        if (userDatabase.containsKey(username))
        {
            JOptionPane.showMessageDialog(frame, "Username already exists. Please choose a different username.", "Error", JOptionPane.ERROR_MESSAGE);
        }
        else if (username.isEmpty() || password.isEmpty())
        {
            JOptionPane.showMessageDialog(frame, "Username and password cannot be empty.", "Error", JOptionPane.ERROR_MESSAGE);
        } 
        else 
        {
            userDatabase.put(username, password);
            JOptionPane.showMessageDialog(frame, "Account created successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
        }
    }
    private void performLogin() 
    {
        String username = usernameField.getText();
        String password = String.valueOf(passwordField.getPassword());
        String mode = (String) modeSelector.getSelectedItem();
        if (userDatabase.containsKey(username) && userDatabase.get(username).equals(password)) 
        {
            JOptionPane.showMessageDialog(frame, "Login Successful in " + mode, "Success", JOptionPane.INFORMATION_MESSAGE);
            if (mode.equals("User Mode")) 
            {
                userModeAction();
            } 
            else if (mode.equals("Vendor Mode")) 
            {
                vendorModeAction();
            }
        } 
        else 
        {
            JOptionPane.showMessageDialog(frame, "Invalid Username or Password", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    private void userModeAction() 
    {
        JOptionPane.showMessageDialog(frame, "Welcome to User Mode!", "User Mode", JOptionPane.INFORMATION_MESSAGE);
    }
    private void vendorModeAction()
    {
        JOptionPane.showMessageDialog(frame, "Welcome to Vendor Mode!", "Vendor Mode", JOptionPane.INFORMATION_MESSAGE);
    }
    public void display() 
    {
        frame.setVisible(true);
    }
}
