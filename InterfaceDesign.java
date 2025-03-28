package Mainpackage;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class InterfaceDesign
{
    private JFrame frame;
    public static void main(String[] args)
    {
        EventQueue.invokeLater(() -> 
        {
            try 
            {
                InterfaceDesign window = new InterfaceDesign();
                window.frame.setVisible(true);
            } 
            catch (Exception e) 
            {
                e.printStackTrace();
            }
        });
    }
    public InterfaceDesign() 
    {
        initialize();
    }
    private void initialize() 
    {
        frame = new JFrame();
        frame.getContentPane().setBackground(Color.CYAN);
        frame.getContentPane().setFont(new Font("Times New Roman", Font.BOLD, 15));
        frame.setBounds(100, 100, 912, 280);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setLayout(null);
        JLabel lblInventoryManagement = new JLabel("Inventory Management");
        lblInventoryManagement.setForeground(Color.RED);
        lblInventoryManagement.setBackground(Color.BLACK);
        lblInventoryManagement.setFont(new Font("Serif", Font.BOLD, 40));
        lblInventoryManagement.setBounds(248, 0, 440, 146);
        frame.getContentPane().add(lblInventoryManagement);
        JButton btnHome = new JButton("Home");
        btnHome.setBackground(Color.GRAY);
        btnHome.setFont(new Font("SansSerif", Font.PLAIN, 21));
        btnHome.setBounds(56, 169, 166, 38);
        frame.getContentPane().add(btnHome); 
        JButton btnSearch = new JButton("Search");
        btnSearch.setBackground(Color.GRAY);
        btnSearch.setFont(new Font("SansSerif", Font.PLAIN, 21));
        btnSearch.setBounds(373, 173, 233, 34);
        frame.getContentPane().add(btnSearch);
        JButton btnSignIn = new JButton("Sign-in");
        btnSignIn.setBackground(Color.GRAY);
        btnSignIn.setFont(new Font("SansSerif", Font.PLAIN, 21));
        btnSignIn.setBounds(667, 169, 181, 34);
        frame.getContentPane().add(btnSignIn);
        btnSignIn.addActionListener(new ActionListener() 
        {
            public void actionPerformed(ActionEvent e) 
            {
                UserLogin loginWindow = new UserLogin();
                loginWindow.display();
                frame.dispose(); 
            }
        });
    }
}